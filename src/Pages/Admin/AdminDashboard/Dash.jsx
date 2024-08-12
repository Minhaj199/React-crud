import React, { useState } from "react";
import { NavAdmin } from "../../../Component/NavbarForAdmin/NavAdmin";
import "./Dash.css";
export const Dash = () => {
  const [state, setState] = useState([
    { userName: "Minhaj", email: "minhaj@gmail.com", phone: "8086464679" },
    { userName: "Shamal", email: "Shamal@gmail.com", phone: "8086464679" },
    { userName: "Shamal", email: "Shamal@gmail.com", phone: "8086464679" },
    { userName: "Shamal", email: "Shamal@gmail.com", phone: "8086464679" },
    { userName: "Shamal", email: "Shamal@gmail.com", phone: "8086464679" },
    { userName: "Shamal", email: "Shamal@gmail.com", phone: "8086464679" },
    
    
  ]);
  return (
    <>
      <NavAdmin />
      <div className="Main-div">
        <dir className='button-div'>
          <button>ADD USER</button>
        </dir>
        <div className="Table">
          <div className="headings">
            <div className="heads">Count</div>

            <div className="heads">Use name</div>
            <div className="heads">Img</div>
            <div className="heads">Email</div>
            <div className="heads">Phone</div>
            <div className="heads operation"></div>
          </div>
          {state.map((element, index) => {
            return (
              <div className="contents" key={index}>
                <div className="heads">{index + 1}</div>
                <div className="heads">{element.userName}</div>
                <div className="heads">
                  <img src="/618yTc8TTfL._SX679_.jpg" alt="" />
                </div>
                <div className="heads">{element.email}</div>
                <div className="heads">{element.phone}</div>
                <div className="heads operation">
                  <img src="/editing.png" alt="" />
                  <img src="/delete.png" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
