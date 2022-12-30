import moment from "moment";
import React from "react";
import ReadMore from "../components/atoms/ReadMore";
import { useTheme } from "../hooks/useTheme";

function ViewPost() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-viewpost`}>
      <div className="flexrow">
        <div className="left">
          <div className="imgwapper">
            <img
              src="https://osnabruegge.github.io/images/demo/demo-landscape.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="userinfo">
            <div className="toprow">
              <div className="imgicon">
                <img src="/assets/icons/fakeuser.jpg" alt="" />
              </div>

              <div className="username">
                <p>User_name</p>
                <p className="date">{moment().format("MMM Do YY")}</p>
              </div>
            </div>
            <div className="postcontent">
              <ReadMore text="lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab eligendi neque nulla, sed quas sit incidunt distinctio iusto atque officia corporis! Esse, in quae. Fugiat quas placeat ipsum nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab eligendi neque nulla, sed quas sit incidunt distinctio iusto atque officia corporis! Esse, in quae. Fugiat quas placeat ipsum nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab eligendi neque nulla, sed quas sit incidunt distinctio iusto atque officia corporis! Esse, in quae. Fugiat quas placeat ipsum nobis." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
