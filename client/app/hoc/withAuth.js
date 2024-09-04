"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");
      // console.log(token);
      if (!token) {
        router.push("/register");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
