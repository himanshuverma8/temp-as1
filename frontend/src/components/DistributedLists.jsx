import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DistributedLists() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/lists/grouped", {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        setError(err.response?.data?.msg || "Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchLists();
  }, [data]);

  if (loading)
    return (
      <p className="text-center text-gray-600 mt-10">Loading distributed lists...</p>
    );

  if (error)
    return (
      <p className="text-center text-red-600 font-semibold mt-10">
        Error: {error}
      </p>
    );

  if (data.length === 0)
    return (
      <p className="text-center text-gray-500 mt-10">No lists assigned yet.</p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
        Distributed Lists per Agent
      </h2>

      {data.map((agent) => (
        <div
          key={agent.agentId}
          className="mb-12 bg-white shadow-md rounded-lg border border-gray-200"
        >
          <div className="bg-indigo-600 text-white px-6 py-3 rounded-t-lg flex justify-between items-center">
            <h3 className="text-xl font-semibold">{agent.agentName}</h3>
            <span className="text-sm italic opacity-80">{agent.agentEmail}</span>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800">
                <th className="p-3 border border-indigo-300">First Name</th>
                <th className="p-3 border border-indigo-300">Phone</th>
                <th className="p-3 border border-indigo-300">Notes</th>
              </tr>
            </thead>
            <tbody>
              {agent.tasks.map((task, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-indigo-50"}
                >
                  <td className="p-3 border border-indigo-300 text-gray-900">{task.firstName}</td>
                  <td className="p-3 border border-indigo-300 text-gray-900">{task.phone}</td>
                  <td className="p-3 border border-indigo-300 text-gray-900">{task.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
