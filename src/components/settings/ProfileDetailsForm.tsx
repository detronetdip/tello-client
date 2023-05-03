import React, { useRef, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";
import { RESOURCE_SERVER_ADDRESS } from "../../utils/globalEnv";
import axiosInstance from "../../utils/HttpRequest";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../context";
import { setUserStorage } from "../../utils/storageHandler";
import { toast } from "react-toastify";
import { BiImageAdd } from "react-icons/bi";
import InputWithRef from "../atoms/InputWithRef";

function ProfileDetailsForm() {
  const profileUpdateURL = `${RESOURCE_SERVER_ADDRESS}/api/v1/updateProfile`;
  const userContext = useSetRecoilState(userState);
  const userData = useRecoilValue(userState);
  const updateEmailValidationSchema = object({
    email: string()
      .email("Invalid email address.")
      .required("Email is required."),
  });
  const updateUserNameValidationSchema = object({
    username: string().required("Username is required."),
  });
  const updateProfileEmail = async (values: { email: string }) => {
    try {
      const { data } = await axiosInstance.put(profileUpdateURL, {
        userId: userData.userId,
        email: values.email,
      });
      userContext((old) => {
        return {
          ...old,
          email: data.info.email,
        };
      });
      setUserStorage("_userInfo", { email: data.info.email });
      toast.success(data.msg);
    } catch (error) {}
  };
  const updateProfileUsername = async (values: { username: string }) => {
    try {
      const { data } = await axiosInstance.put(profileUpdateURL, {
        userId: userData.userId,
        username: values.username,
      });
      userContext((old) => {
        return {
          ...old,
          userName: data.info.username,
        };
      });
      setUserStorage("_userInfo", { userName: data.info.username });
      toast.success(data.msg);
    } catch (error) {}
  };
  const updateEmail = useFormik({
    initialValues: {
      email: userData.email || "",
    },
    validationSchema: updateEmailValidationSchema,
    onSubmit: updateProfileEmail,
  });
  const updateUsername = useFormik({
    initialValues: {
      username: userData.userName || "",
    },
    validationSchema: updateUserNameValidationSchema,
    onSubmit: updateProfileUsername,
  });
  const [render, setRender] = useState(Date.now());
  const [openPostWithImage, setOpenPostWithImage] = useState(false);
  const [file, setFile] = useState<string>();
  const fileInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onLoadHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const file = URL.createObjectURL(
      (e.target as HTMLInputElement).files?.[0] as Blob
    );
    setFile(file);
    setOpenPostWithImage(true);
  };
  const closePopUp = (v: Boolean) => {
    setRender(Date.now());
    setOpenPostWithImage(false);
  };
  return (
    <>
      <h1>Profile Details</h1>
      <div className="settingsbox">
        <form>
          <div className="formrow">
            <div className="post2">
              <label>Update Profile Picture</label>
              <div className="cd">
                <label className="imageicon" htmlFor="postIMG">
                  <BiImageAdd />
                </label>
                <InputWithRef
                  key={render}
                  ref={fileInputRef}
                  type="file"
                  id="postIMG"
                  placeholder=""
                  styles={{ display: "none" }}
                  onChange={(
                    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => onLoadHandler(e)}
                />
                <div className="btnrow">
                  <Button content="Update" Class="btn-1" ripple />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
