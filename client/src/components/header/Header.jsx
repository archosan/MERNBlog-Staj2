import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__titles">
        <span className="headerTitleSm">Bloğuma</span>
        <span className="headerTitleLg">Hoşgeldiniz</span>
      </div>
      <img
        className="header__image"
        src="https://images.wallpaperscraft.com/image/mountains_lake_tops_top_view_119133_3840x2400.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
