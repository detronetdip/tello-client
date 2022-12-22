import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";

function ProfileDetailsForm() {
  const profileDetailsValidationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
    username: string().required("Username is required."),
    bio: string().required("Bio is required."),
  });
  const updateProfileDetails = (values: {
    email: string;
    username: string;
    bio: string;
  }) => {
    console.log(values);
    profileDetails.resetForm();
  };
  const profileDetails = useFormik({
    initialValues: {
      email: "",
      username: "",
      bio: "",
    },
    validationSchema: profileDetailsValidationSchema,
    onSubmit: updateProfileDetails,
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
              onChange={profileDetails.handleChange}
              id="email"
              type="email"
              placeholder="Email"
              value={profileDetails.values.email}
              error={
                profileDetails.touched.email && profileDetails.errors.email
              }
            />
            <p>This is your primary email associate with this account.</p>
          </div>
          <div className="formrow">
            <label htmlFor="username">Username</label>
            <br />
            <Input
              onChange={profileDetails.handleChange}
              id="username"
              type="text"
              placeholder="Username"
              value={profileDetails.values.username}
              error={
                profileDetails.touched.username &&
                profileDetails.errors.username
              }
            />
            <p>
              By your username your friends can find you. You can change your
              username at any time.
            </p>
          </div>
          <div className="formrow">
            <label htmlFor="bio">Bio</label>
            <br />
            <Input
              onChange={profileDetails.handleChange}
              id="bio"
              type="text"
              placeholder="Bio"
              value={profileDetails.values.bio}
              error={profileDetails.touched.bio && profileDetails.errors.bio}
            />
            <p>This is your bio and it will be visible on your profile.</p>
          </div>
          <div className="btnrow">
            <Button
              content="Update"
              onclick={() => profileDetails.handleSubmit()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileDetailsForm;
