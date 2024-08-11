import React from "react";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="main-div">
      <div className="form-div">
        <h1> User Profile</h1>
       
        <div className="profile-img">
          <img src="/618yTc8TTfL._SX679_.jpg" alt="" />
          <input id="input id" type="file" />
        </div>
       
        
        <form>
          <input type="name" placeholder="User Name" name="useName" />
          <input type="email" placeholder="Email" name="email" />
          <input type="tel" placeholder="Mobile" name="phone" />
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Confirm password"
            name="c-password"
          />
          <button type="submit">Update Change</button>
        </form>
      </div>
    </div>
  );
};
