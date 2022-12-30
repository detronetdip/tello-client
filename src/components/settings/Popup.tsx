import React from "react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../atoms/Button";

function Popup({ closePopup }: { closePopup: Function }) {
  const { theme } = useTheme();
  return (
    <>
      <div className={`${theme}-bg`}>
        <div className="middlebox">
          <div className="box">
            <div className="heading">
              <p>Delete my Account</p>
            </div>

            <div className="body">
              <p>
                {" "}
                If you do not think you will use Tello again and would like your
                account deleted, we can take care of this for you. Keep in mind
                that you will not be able to reactivate your account or retrieve
                any of the content or information you have added.If you would
                still like your account deleted, click "Delete My Account".
              </p>
            </div>

            <div className="btnrow">
              <Button Class="btn5" content={"Delete My Account"} />
              <Button Class="btn6"
                content={"Cancel"}
                onclick={() => {
                  closePopup(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
