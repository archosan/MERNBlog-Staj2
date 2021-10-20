import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context.js";
import { Avatar } from "@material-ui/core";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              ANA SAYFA
            </Link>
          </li>
          <li className="topListItem">HAKKINDA</li>
          <li className="topListItem">İLETİŞİM</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              YAZ
            </Link>
          </li>
          <li onClick={handleLogout} className="topListItem">
            {user && "ÇIKIŞ"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            {/* <img className="topImg" src={PF + user.profilePic} alt="" /> */}
            <div className="avatarIcon">
              <Avatar src={PF + user.profilePic} />
            </div>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                GİRİŞ
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                KAYIT OL
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
