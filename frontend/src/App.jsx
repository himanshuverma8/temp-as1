import React, { useEffect } from 'react'
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from 'lucide-react'
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

function App() {

    const {authUser, checkAuth, isCheckingAuth,} = useAuthStore();
    useEffect(() => {
    checkAuth();
  }, [checkAuth])
  console.log({authUser})

  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin' />
    </div>
  )

  return (
   <div>
      <Routes>
        <Route path="/" element={authUser ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
   </div>
  );
}

export default App;