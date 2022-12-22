import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { object, string } from "yup";
import { useFormik } from "formik";

function AccountSecurityForm() {
  const accountSecurityValidationSchema = object({
    password: string().required("Password is required."),
    cnfpassword: string().required("Confirm password is required."),
  });
  const updateAccountSecurityDetails = (values: {
    password: string;
    cnfpassword: string;
  }) => {
    console.log(values);
    if(values.password!==values.cnfpassword){
      accountSecurityDetails.setErrors({cnfpassword:"Confirm password not matched."})
      return;
    }
    accountSecurityDetails.resetForm();
  };
  const accountSecurityDetails = useFormik({
    initialValues: {
      password: "",
      cnfpassword: "",
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
            <label htmlFor="password">Password</label>
            <br />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={accountSecurityDetails.values.password}
              onChange={accountSecurityDetails.handleChange}
              error={
                accountSecurityDetails.touched.password &&
                accountSecurityDetails.errors.password
              }
            />
          </div>
          <div className="formrow">
            <label htmlFor="cnfpassword">Confirm Password</label>
            <br />
            <Input
              id="cnfpassword"
              type="password"
              placeholder="Confirm Password"
              value={accountSecurityDetails.values.cnfpassword}
              onChange={accountSecurityDetails.handleChange}
              error={
                accountSecurityDetails.touched.cnfpassword &&
                accountSecurityDetails.errors.cnfpassword
              }
            />
          </div>
          <div className="btnrow">
            <Button content="Update Password" onclick={() => accountSecurityDetails.handleSubmit()} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountSecurityForm;
