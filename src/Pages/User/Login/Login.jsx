import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [switching, setSwitching] = useState(false);

  return (
    <div className="login">
      <div className="login-form">
        <h1>{switching?'User Signup':'User Login'}</h1>
        <form>
          {switching ? (
            <input type="name" placeholder="User Name" name="useName" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" name="email" />
          {switching ? (
            <input type="tel" placeholder="Mobile" name="phone" />
          ) : (
            <></>
          )}{" "}
          <input type="password" placeholder="Password" name="password" />
          {switching ? (
            <input
              type="password"
              placeholder="Confirm password"
              name="c-password"
            />
          ) : (
            <></>
          )}
          <button type="submit">{switching ? "Sign up" : "Sign in"}</button>
        </form>

        <p className={switching?'signup-stage ':'login-stae'} onClick={() => setSwitching((previous) => !previous)}>
        {switching?'Already have an account ':'Not Having Account '}
        </p>
      </div>
    </div>
  );
};
