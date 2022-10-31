import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({ changeForm }: any) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });
  const handelSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
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
    <>
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
            onclick={() => formik.handleSubmit()}
          />
        </div>
        <div className="fgtp">
          <span>Forgot password?</span>
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
    </>
  );
};

export default LoginForm;
