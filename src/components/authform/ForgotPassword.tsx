import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import { object, string } from "yup";

function ForgotPassword({ changeForm }: any) {
  const [viewOTPForm, setViewOTPForm] = useState(false);

  const validationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
  });
  const otpValidaionSchema = object({
    otp: string().required("OTP is required."),
  });
  const handelSubmit = ({ email }: { email: string }) => {
    console.log(email);
    setViewOTPForm(true)
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handelSubmit,
  });
  const handelOTPSubmit = ({ otp }: { otp: string }) => {
    console.log(otp);
  };
  const OTPForm = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpValidaionSchema,
    onSubmit: handelOTPSubmit,
  });

  return (
    <>
      {!viewOTPForm ? (
        <form className="ForgotPassword">
          <Input
            type="email"
            placeholder="Enter your email"
            Class="input mt-2"
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            error={formik.touched.email && formik.errors.email}
          />
          <div className="btnrow">
            <Button
              content="Submit"
              Class="btn mt-3"
              ripple
              onclick={() => formik.handleSubmit()}
            />
          </div>
          <hr className="line" />
          <div className="fgtp">
            <span onClick={() => changeForm(1)}>Login</span>
          </div>
        </form>
      ) : (
        <form className="loginForm">
          <Input
            type="text"
            placeholder="Enter your OTP"
            Class="input mt-3"
            onChange={OTPForm.handleChange}
            value={OTPForm.values.otp}
            name="otp"
            error={OTPForm.touched.otp && OTPForm.errors.otp}
          />
          <div className="btnrow">
            <Button
              content="Verify"
              Class="btn mt-3"
              onclick={() => OTPForm.handleSubmit()}
            />
          </div>
          <div className="fgtp">
            <span onClick={() => changeForm(1)}>Sent again</span>
          </div>
        </form>
      )}
    </>
  );
}

export default ForgotPassword;
