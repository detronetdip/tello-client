import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../utils/HttpRequest";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";

function LoginForm({ changeForm }: any) {
  const validationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: string().required("Password is required."),
  });
  const handelSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    // dummy request
    const data = await axiosInstance.post(
      `${RESOURCE_SERVER_ADDRESS}/api/v1/addFriend`,
      {
        userId: "userId",
        friendId: "friendId",
      }
    );
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handelSubmit,
  });

  return (
    <form className="loginForm">
      <Input
        type="email"
        placeholder="Enter your email"
        Class="input mt-2"
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        Class="input mt-3"
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        error={formik.touched.password && formik.errors.password}
      />
      <div className="btnrow">
        <Button
          content="Login"
          Class="btn mt-3"
          ripple
          onclick={() => formik.handleSubmit()}
        />
      </div>
      <div className="fgtp">
        <span onClick={() => changeForm(3)}>Forgot password?</span>
      </div>
      <hr className="line" />
      <div className="btnrow">
        <Button
          content="Create Account"
          Class="btn mt-3 cg"
          onclick={() => changeForm(2)}
        />
      </div>
      <br />
    </form>
  );
}

export default LoginForm;
