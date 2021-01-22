import React from "react";
import { useForm } from "react-hook-form";

interface ILoginForm {
  phoneNumber?: string;
  password?: string;
}

export const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = () => {
    console.log(getValues());
  };
  console.log(errors);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-5 rounded-lg text-center">
        <h3 className=" text-3xl text-gray-800">Log In</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 px-5"
        >
          <input
            name="phoneNumber"
            ref={register({ required: "Phone number is required" })}
            placeholder="phoneNumber"
            className="input mb-3 py-3 px-2"
          />
          {errors.phoneNumber?.message && (
            <span className="text-red-500">{errors.phoneNumber?.message}</span>
          )}
          <input
            name="password"
            type="password"
            ref={register({ required: "Password is required", minLength: 5 })}
            placeholder="password"
            className="input py-3 px-2"
          />
          {errors.password?.message && (
            <span className="text-red-500">{errors.password?.message}</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500">
              Password must be more than 5 chars
            </span>
          )}
          <button className="btn px-3 py-5 ">Log In</button>
        </form>
      </div>
    </div>
  );
};
