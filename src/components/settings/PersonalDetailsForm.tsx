import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";

function PersonalDetailsForm() {
  const personalDetailsValidationSchema = object({
    fname: string().required("First name is required."),
    lname: string().required("Last name is required."),
    dob: string().required("DOB is required."),
    bio: string().required("Bio is required."),
  });
  const updatePersonalDetails = (values: {
    fname: string;
    lname: string;
    dob: string;
    bio: string;
  }) => {
    console.log(values);
    personalDetails.resetForm();
  };
  const personalDetails = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      dob: "",
      bio: "",
    },
    validationSchema: personalDetailsValidationSchema,
    onSubmit: updatePersonalDetails,
  });
  return (
    <>
      <h1 className="mt-2">Personal Details</h1>
      <div className="settingsbox">
        <form>
          <div className="formrow">
            <label htmlFor="fname">First Name</label>
            <br />
            <Input
              id="fname"
              type="text"
              placeholder="Firstname"
              value={personalDetails.values.fname}
              onChange={personalDetails.handleChange}
              error={
                personalDetails.touched.fname && personalDetails.errors.fname
              }
            />
          </div>
          <div className="formrow">
            <label htmlFor="lname">Last Name</label>
            <br />
            <Input
              id="lname"
              type="text"
              placeholder="Lastname"
              value={personalDetails.values.lname}
              onChange={personalDetails.handleChange}
              error={
                personalDetails.touched.lname && personalDetails.errors.lname
              }
            />
          </div>

          <div className="formrow">
            <label htmlFor="bio">Bio</label>
            <br />
            <Input
              onChange={personalDetails.handleChange}
              id="bio"
              type="text"
              placeholder="Bio"
              value={personalDetails.values.bio}
              error={personalDetails.touched.bio && personalDetails.errors.bio}
            />
          </div>
          <div className="formrow">
            <label htmlFor="dob">D.O.B</label>
            <br />
            <Input
              id="dob"
              type="date"
              placeholder="D.O.B"
              value={personalDetails.values.dob}
              onChange={personalDetails.handleChange}
              error={personalDetails.touched.dob && personalDetails.errors.dob}
            />
          </div>
          <div className="btnrow">
            <Button
              content="Update"
              onclick={() => personalDetails.handleSubmit()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default PersonalDetailsForm;
