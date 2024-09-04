"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const CheckPasswordPage = () => {
  const [data, setData] = useState({
    password: "",
    userId: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.NEXT_PUBLIC_BASE_URL}auth/login`;

    try {
      const response = await axios({
        method: "post",
        url: URL,
        data: {
          userId: "66d7f2f7d69585b88fbdfcf5",
          password: data.password,
        },
        // withCredentials: true,
      });

      toast.success(response.data.message);

      if (response.data.success) {
        localStorage.setItem("token", response?.data?.token);
        // document.cookie = `token=${response?.data?.token}; path=/; max-age=3600; SameSite=Lax; Secure`;

        setData({
          password: "",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto">
        <div className="w-fit mx-auto mb-2 flex justify-center items-center flex-col">
          <h2 className="font-semibold text-lg mt-1"></h2>
        </div>

        <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <button className="bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
            Login
          </button>
        </form>

        <p className="my-3 text-center">
          <Link
            href={"/forgot-password"}
            className="hover:text-primary font-semibold"
          >
            Forgot password ?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckPasswordPage;
