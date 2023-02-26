import React, { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import axiosInstance from "../../utils/HttpRequest";
import { useRecoilValue } from "recoil";
import { userState } from "../../context";
import { toast } from "react-toastify";
import { setUserStorage } from "../../utils/storageHandler";

function PersonalDetailsForm() {
  const profileUpdateURL = `${RESOURCE_SERVER_ADDRESS}/api/v1/updateProfile`;

  const [basicDetails, setBasicDetails] = useState({
    fname: "",
    lname: "",
    dob: "",
    bio: "",
  });
  const { userId } = useRecoilValue(userState);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosInstance.get(
        RESOURCE_SERVER_ADDRESS + "/api/v1/me/" + userId
      );
      const { info } = data;
      const { firstname, lastname, dob, bio } = info;
      setBasicDetails((old) => {
        return {
          ...old,
          dob,
          bio,
          fname: firstname,
          lname: lastname,
        };
      });
      // console.log(info);
    };
    getData();
  }, []);

  const personalDetailsValidationSchema = object({
    fname: string().required("First name is required."),
    lname: string().required("Last name is required."),
    dob: string().required("DOB is required."),
    bio: string().required("Bio is required."),
  });
  const updatePersonalDetails = async (values: {
    fname: string;
    lname: string;
    dob: string;
    bio: string;
  }) => {
    const updatedData = {
      bio: values.bio || basicDetails.bio,
      firstName: values.fname || basicDetails.fname,
      lastName: values.lname || basicDetails.lname,
      dob: values.dob || basicDetails.dob,
    };
    if (updatedData.bio.length > 50) {
      toast.warn("Bio should be less than 50 character long");
      return;
    }
    try {
      const { data } = await axiosInstance.put(profileUpdateURL, updatedData);
      const { info } = data;
      console.log(info);
      setUserStorage("_userInfo", {
        userName: info.username,
        email: info.email,
        firstName: info.firstname,
        lastName: info.lastname,
      });
      toast.success(data.msg);
    } catch (error: any) {
      toast.warn(error.response.data.msg);
    }
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
  useEffect(() => {
    personalDetails.values.fname = basicDetails.fname;
    personalDetails.values.lname = basicDetails.lname;
    personalDetails.values.dob = basicDetails.dob;
    personalDetails.values.bio = basicDetails.bio;
  }, [basicDetails]);
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
