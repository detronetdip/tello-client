import React, { useState } from "react";
import Button from "../atoms/Button";
import Popup from "./Popup";

function AccountDlt() {
  const [PopupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="settingsbox br-red">
        <div className="flexrow">
          <h4>Delete Account</h4>
          <div className="btnrow">
            <Button
              Class="dl-btn"
              content={"Delete"}
              onclick={() => {
                setPopupOpen(true);
              }}
            />
          </div>
        </div>
        {PopupOpen && <Popup closePopup={setPopupOpen} />}
      </div>
    </>
  );
}

export default AccountDlt;
