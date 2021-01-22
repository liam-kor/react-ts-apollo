import React from "react";

export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-5 rounded-lg text-center">
        <h3 className=" text-3xl text-gray-800">Log In</h3>
        <form className="flex flex-col mt-5 px-5">
          <input placeholder="phoneNumber" className="input mb-3 py-3 px-2" />
          <input placeholder="password" className="input py-3 px-2" />
          <button className="btn px-3 py-5 ">Log In</button>
        </form>
      </div>
    </div>
  );
};
