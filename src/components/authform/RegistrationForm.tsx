import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ changeForm }: any) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    username: Yup.string().required("Email is required."),
    password: Yup.string().required("Password is required."),
  });
  const handelSubmit = ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    console.log(email, password, username);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
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
          type="text"
          placeholder="Enter your username"
          Class="input mt-2"
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          error={formik.touched.username && formik.errors.username}
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
            content="Register"
            Class="btn mt-3"
            onclick={() => formik.handleSubmit()}
          />
        </div>
        <div className="fgtp">
          <span onClick={() => changeForm(1)}>Login</span>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
