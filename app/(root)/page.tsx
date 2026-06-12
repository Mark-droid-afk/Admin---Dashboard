"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/signin");
    }
  }, [user, isLoading]);
  return (
    <div className="dark:text-gray-400">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the asfas sfdsf admin sdfasd asddashboard. Here you can manage your application.</p>
      <p>gawin niyong l safsadf ocalhost:3000/login yung url para macheck yung login form</p>
      <p className="mt-10">**sign in lang nandito sa employee diba?**</p>
    </div>
  );
}

export default Page;
