import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");

    const allowedTypes = [
      "text/csv",
      "application/vnd.ms-excel",                // .xls
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
    ];

    if (!allowedTypes.includes(file.type)) {
      return alert("Only CSV, XLS, or XLSX files are allowed.");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      await axios.post("http://localhost:5001/api/lists", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // to send JWT cookie
      });
      alert("✅ Upload complete and data distributed to agents.");
      setFile(null);
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Failed to upload file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full max-w-md p-4 border rounded space-y-3">
      <h3 className="text-xl font-semibold">Upload List (CSV/XLS/XLSX)</h3>

      <input
        type="file"
        accept=".csv,.xls,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-60"
      >
        {loading ? "Uploading..." : "Upload & Distribute"}
      </button>
    </div>
  );
};

export default UploadForm;
