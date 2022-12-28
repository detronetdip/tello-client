import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";

function AccountSecurityForm() {
  const accountSecurityValidationSchema = object({
    password: string().required("Password is required."),
    cnfpassword: string().required("Confirm password is required."),
    olpassword: string().required("Old password is required."),
  });
  const updateAccountSecurityDetails = (values: {
    password: string;
    cnfpassword: string;
    olpassword: string;
  }) => {
    console.log(values);
    if (values.password !== values.cnfpassword) {
      accountSecurityDetails.setErrors({
        cnfpassword: "Confirm password not matched.",
      });
      return;
    }
    accountSecurityDetails.resetForm();
  };
  const accountSecurityDetails = useFormik({
    initialValues: {
      password: "",
      cnfpassword: "",
      olpassword: "",
    },
    validationSchema: accountSecurityValidationSchema,
    onSubmit: updateAccountSecurityDetails,
  });
  return (
    <>
      <h1 className="mt-2">Account Security</h1>
      <div className="settingsbox">
        <form>
          <div className="formrow">
            <label htmlFor="password">Old Password</label>
            <br />
            <Input
              id="olpassword"
              type="password"
              placeholder="Old Password"
              value={accountSecurityDetails.values.olpassword}
              onChange={accountSecurityDetails.handleChange}
              error={
                accountSecurityDetails.touched.olpassword &&
                accountSecurityDetails.errors.olpassword
              }
            />
          </div>
          <div className="formrow">
            <label htmlFor="password">New Password</label>
            <br />
            <Input
              id="password"
              type="password"
              placeholder="New Password"
              value={accountSecurityDetails.values.password}
              onChange={accountSecurityDetails.handleChange}
              error={
                accountSecurityDetails.touched.password &&
                accountSecurityDetails.errors.password
              }
            />
          </div>
          <div className="formrow">
            <label htmlFor="cnfpassword">Confirm New Password</label>
            <br />
            <Input
              id="cnfpassword"
              type="password"
              placeholder="Confirm New Password"
              value={accountSecurityDetails.values.cnfpassword}
              onChange={accountSecurityDetails.handleChange}
              error={
                accountSecurityDetails.touched.cnfpassword &&
                accountSecurityDetails.errors.cnfpassword
              }
            />
          </div>
          <div className="btnrow">
            <Button
              content="Update Password"
              onclick={() => accountSecurityDetails.handleSubmit()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountSecurityForm;
