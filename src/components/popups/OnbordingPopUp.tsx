import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const OnbordingPopUp = () => {
  return (
    <>
      <div className="popupholder">
        <div className="popupcontainer">
          <div className="main">
            <div className="box1">
              <div className="age">
                <p>Please Select Your D.O.B</p>
                <form>
                  <input type="date" />
                </form>
              </div>
            </div>
            <div className="box2">
              <div className="bio">
                <form>
                  <Input
                    placeholder={"Write Something about you"}
                    type={"text"}
                  />
                </form>
              </div>
            </div>
            <div className="box3">
              <div className="interestbox">
                <div className="interestform">
                  <input
                    type="text"
                    placeholder="Enter your interest and press enter"
                  />
                </div>
                <div className="allinterest">
                  
                    <div className="single-interest">
                      <span>hd</span>
                     
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnbordingPopUp;
