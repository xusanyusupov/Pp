import React from "react";
import "../404/notfound.scss";
import notIMG from "../../assets/notfound.svg";
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="not__img">
        <img src={notIMG} alt="" />
        <strong>404</strong>
      </div>
      <div className="not__info">
        <p>Looks like nothing was found :(</p>
        <button onClick={()=> navigate('/')}>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <IoHomeSharp className="svggg" />
            </div>
          </div>
          <span>Home</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
