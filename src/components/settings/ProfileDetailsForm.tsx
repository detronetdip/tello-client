import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";

function ProfileDetailsForm() {
  const updateEmailValidationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
  });
  const updateUserNameValidationSchema = object({
    username: string().required("Username is required."),
  });
  const updateProfileEmail = (values: { email: string }) => {
    console.log(values);
    updateEmail.resetForm();
  };
  const updateProfileUsername = (values: { username: string }) => {
    console.log(values);
    updateUsername.resetForm();
  };
  const updateEmail = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: updateEmailValidationSchema,
    onSubmit: updateProfileEmail,
  });
  const updateUsername = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: updateUserNameValidationSchema,
    onSubmit: updateProfileUsername,
  });
  return (
    <>
      <h1>Profile Details</h1>
      <div className="settingsbox">
        <form>
          <div className="formrow">
            <label htmlFor="email">Email</label>
            <br />
            <Input
              onChange={updateEmail.handleChange}
              id="email"
              type="email"
              placeholder="Email"
              value={updateEmail.values.email}
              error={updateEmail.touched.email && updateEmail.errors.email}
            />
            <p>This is your primary email associate with this account.</p>
          </div>
          <div className="btnrow">
            <Button
              content="Update"
              onclick={() => updateEmail.handleSubmit()}
            />
          </div>
        </form>
      </div>
      <div className="settingsbox">
        <form>
          <div className="formrow">
            <label htmlFor="username">Username</label>
            <br />
            <Input
              onChange={updateUsername.handleChange}
              id="username"
              type="text"
              placeholder="Username"
              value={updateUsername.values.username}
              error={
                updateUsername.touched.username &&
                updateUsername.errors.username
              }
            />
            <p>
              By your username your friends can find you. You can change your
              username at any time.
            </p>
          </div>
          <div className="btnrow">
            <Button
              content="Update"
              onclick={() => updateUsername.handleSubmit()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileDetailsForm;
