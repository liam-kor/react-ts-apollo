import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/form-error";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($phoneNumber: String!, $password: String!) {
    login(input: { phoneNumber: $phoneNumber, password: $password }) {
      ok
      token
      error
    }
  }
`;

interface ILoginForm {
  phoneNumber: string;
  password: string;
}

export const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const [loginMutation, { loading, error, data }] = useMutation(LOGIN_MUTATION);
  const onSubmit = () => {
    const { phoneNumber, password } = getValues();
    loginMutation({
      variables: {
        phoneNumber,
        password,
      },
    });
  };
  console.log(errors);
  console.log(data);
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
            <FormError errorMessage={errors.phoneNumber?.message} />
          )}
          <input
            name="password"
            type="password"
            ref={register({ required: "Password is required", minLength: 5 })}
            placeholder="password"
            className="input py-3 px-2"
          />
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 5 chars" />
          )}
          <button className="btn px-3 py-5 ">Log In</button>
        </form>
      </div>
    </div>
  );
};
