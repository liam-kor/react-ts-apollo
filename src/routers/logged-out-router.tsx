import React from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo";

interface IForm {
  phoneNumber: string;
  password: string;
}

export const LoggedOutRouter = () => {
  const { register, watch, handleSubmit, errors } = useForm<IForm>();
  console.log(watch());
  const onSubmit = () => {
    console.log(watch());
  };
  const onInvalid = () => {
    console.log("cant create account");
  };
  console.log(errors);
  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            ref={register({
              required: "This is required",
              pattern: /^[0-9]{3}[0-9]{4}[0-9]{4}$/,
            })}
            name="phoneNumber"
            placeholder="phoneNumber"
          />
          {errors.phoneNumber?.message && (
            <span className="text-black">{errors.phoneNumber?.message}</span>
          )}
          {errors.phoneNumber?.type === "pattern" && (
            <span className="font-bold text-red-600">
              Only phone number allowed
            </span>
          )}
        </div>
        <div>
          <input
            ref={register({ required: true })}
            name="password"
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button className=" bg-yellow-200 text-white">Log in</button>
      </form>
    </div>
  );
};
