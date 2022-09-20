import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../context/index";

const AuthPage = () => {
  const [view, setView] = useState(true);
  const password = useRef() as React.MutableRefObject<HTMLInputElement>;
  const email = useRef() as React.MutableRefObject<HTMLInputElement>;
  const fn = useRef() as React.MutableRefObject<HTMLInputElement>;
  const ln = useRef() as React.MutableRefObject<HTMLInputElement>;
  const un = useRef() as React.MutableRefObject<HTMLInputElement>;
  const setStore = useSetRecoilState(userState);
  const navigate = useNavigate();
  const register = () => {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const userFn = fn.current.value;
    const userLn = ln.current.value;
    const userUn = un.current.value;
    axios
      .post(
        "http://localhost:3000/api/v1/registration",
        {
          email: userEmail,
          password: userPassword,
          username: userUn,
          firstName: userFn,
          lastName: userLn,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        alert("registered successfully")
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const login = () => {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    axios
      .post(
        "http://localhost:3000/api/v1/login",
        {
          email: userEmail,
          password: userPassword,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status == 200) {
          if (res.data.code == 3003) {
            alert("Invalid credentials");
          }
          if (res.data.code == 200) {
            alert("Login sucessfull");
            setStore((old) => {
              return {
                ...old,
                isLoggedIn: true,
              };
            });
            navigate("/profile");
          }
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="wrapper-g">
        {view ? (
          <div className="login">
            <p className="title">Log in</p>
            <input type="text" placeholder="Email" ref={email} />
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Password" ref={password} />
            <i className="fa fa-key"></i>
            <button onClick={login}>
              <span className="state">Log in</span>
            </button>
          </div>
        ) : (
          <div className="reg">
            <p className="title">Registration</p>
            <input type="text" placeholder="email" autoFocus ref={email} />
            <i className="fa fa-user"></i>
            <input type="password" placeholder="Password" ref={password} />
            <i className="fa fa-key"></i>
            <input type="text" placeholder="First Name" ref={fn} />
            <input type="text" placeholder="Last Name" ref={ln} />
            <input type="text" placeholder="User Name" ref={un} />
            <button onClick={register}>
              <span className="state">Register</span>
            </button>
          </div>
        )}
        <div className="bottom">
          <span onClick={() => setView(true)}>Login</span>
          <span onClick={() => setView(false)}>Registration</span>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
