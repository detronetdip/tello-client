import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import { object, string } from "yup";

function ChangePassword({ changeForm }: any) {
  const validationSchema = object({
    password: string().required("Password is required."),
    confirmPassword: string().required("Password is required."),
  });
  const handelSubmit = ({
    confirmPassword,
    password,
  }: {
    confirmPassword: string;
    password: string;
  }) => {
    console.log(confirmPassword, password);
  };
  const formik = useFormik({
    initialValues: {
        confirmPassword: "",
      password: "",
    },
    validationSchema,
    onSubmit: handelSubmit,
  });

  return (
      <form className="ChangePassword">
        <Input
          type="password"
          placeholder="Enter your password"
          Class="input mt-3"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          error={formik.touched.password && formik.errors.password}
        />
         <Input
          type="password"
          placeholder="Re-type password"
          Class="input mt-2"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          name="email"
          error={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <div className="btnrow">
          <Button
            content="Change"
            Class="btn mt-3"
            ripple
            onclick={() => formik.handleSubmit()}
          />
        </div>
        <div className="fgtp">
          <span onClick={()=>changeForm(1)}>Login</span>
        </div>
      </form>
  );
}

export default ChangePassword;
