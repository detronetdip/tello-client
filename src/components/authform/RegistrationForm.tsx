import React, { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useFormik } from "formik";
import { object, string } from "yup";

const RegistrationForm = ({ changeForm }: any) => {
  const [viewOTPForm, setViewOTPForm] = useState(false);
  const validationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
    fname: string().required("Firstname is required."),
    lname: string().required("Lastname is required."),
    username: string().required("Email is required."),
    password: string().required("Password is required."),
  });
  const otpValidaionSchema = object({
    otp: string().required("OTP is required."),
  });
  const handelSubmit = ({
    email,
    fname,
    lname,
    password,
    username,
  }: {
    email: string;
    fname: string;
    lname: string;
    password: string;
    username: string;
  }) => {
    console.log(email, fname, lname, password, username);
    setViewOTPForm(true);
  };
  const registrationForm = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      password: "",
      username: "",
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
        <form className="loginForm">
          <Input
            type="email"
            placeholder="Enter your email"
            Class="input mt-2"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.email}
            name="email"
            error={
              registrationForm.touched.email && registrationForm.errors.email
            }
          />

          <Input
            type="text"
            placeholder="Enter your Firstname"
            Class="input mt-2"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.fname}
            name="fname"
            error={
              registrationForm.touched.fname && registrationForm.errors.fname
            }
          />
          <Input
            type="text"
            placeholder="Enter your Lastname"
            Class="input mt-2"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.lname}
            name="lname"
            error={
              registrationForm.touched.lname && registrationForm.errors.lname
            }
          />
          <Input
            type="text"
            placeholder="Enter your username"
            Class="input mt-2"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.username}
            name="username"
            error={
              registrationForm.touched.username &&
              registrationForm.errors.username
            }
          />
          <Input
            type="password"
            placeholder="Enter your password"
            Class="input mt-3"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.password}
            name="password"
            error={
              registrationForm.touched.password &&
              registrationForm.errors.password
            }
          />

          <div className="btnrow">
            <Button
              content="Register"
              Class="btn mt-3"
              onclick={() => registrationForm.handleSubmit()}
            />
          </div>
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
};

export default RegistrationForm;
