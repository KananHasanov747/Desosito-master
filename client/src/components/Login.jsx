import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Facebook from "../imgs/facebook.svg";
import Google from "../imgs/google.svg";

import axios from "../app/api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data.accessToken;
      const roles = response?.data.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) setErrMsg("No Server Response");
      else if (err.response?.status === 400)
        setErrMsg("Missing Username or Password");
      else if (err.response?.status === 401) setErrMsg("Unauthorized");
      else setErrMsg("Login failed");
      err.current.focus();
    }
    // setUser("");
    // setPwd("");
    // navigate(from, { replace: true });
  };

  const login = (
    <>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <div className="container h-screen mx-auto flex items-center justify-center">
        <div className="login inline-block pb-20">
          <div className="login__header text-center mb-[50px]">
            <h1 className="text-[38px] mb-[10px]">Bienvenido a Desosito!</h1>
            <p>Please login to use the platform</p>
          </div>
          <form className="login__form w-[460px]" onSubmit={handleSubmit}>
            <div className="login__socials">
              <a href="#">
                <img src={Facebook} alt="" className="w-[20px]" />
                Sign in with Facebook
              </a>
              <a href="#">
                <img src={Google} alt="" className="w-[20px]" />
                Sign in with Google
              </a>
            </div>
            <div className="login__or flex w-full py-5">
              <div className="login__hr flex h-auto items-center w-full mx-auto relative"></div>
              <div className="px-3">or</div>
              <div className="login__hr flex h-auto items-center w-full mx-auto relative"></div>
            </div>
            <div className="login__content">
              <div className="login__item">
                <label htmlFor="email">Enter Email</label>
                <input
                  type="text"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </div>
              <div className="login__item">
                <label htmlFor="password">Enter Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>
              <button className="login__btn">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

  return login;
};

export default Login;
