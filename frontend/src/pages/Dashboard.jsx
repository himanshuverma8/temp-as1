import React from "react";
import { useAuthStore } from "../store/useAuthStore";   // adjust path if needed
import { useNavigate } from "react-router-dom";
import AgentForm from "../components/AgentForm";
import UploadForm from "../components/UploadForm";
import DistributedLists from "../components/DistributedLists";  // Import the new component

const Dashboard = () => {
  const logout  = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const authUser = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate("/login");          // redirect after logging out
  };
console.log(authUser.authUser.email);
  return (
    <div className="space-y-6 p-4">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{`Dashboard (${authUser.authUser.email})`}</h2>
        <button
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Logout
        </button>
      </header>

     <div className="flex items-center justify-around"> 
       <AgentForm />
      <UploadForm />
     </div>
      {/* Display distributed lists per agent */}
      <DistributedLists />
    </div>
  );
};

export default Dashboard;
