import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context.js";
import AvatarIcon from "@material-ui/core/Avatar/Avatar";

function Sidebar() {
  const [cats, setCats] = useState([]);
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      {user && (
        <div className="sidebar__item">
          <span className="sidebar__title">HAKKIMDA</span>

          <img
            src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/05/04/357606-1129778356.jpg?itok=Hovslb5G"
            alt=""
            className="sidebarImage"
          />
          <p>
            Anakin, Padme Amidala'nın kocası, Luke Skywalker ve Leia Organa'nın
            babasıdır. Kendisi Grand Jedi Master Yoda'dan sonraki en büyük ışın
            kılıcı ve Güç kullanıcısıdır. Fakat Darth Vader olduktan sonra
            üzerindeki yaşam destek ünitesi ve zırh sebebiyle eskisi gibi Gücü
            kullanamamış, ışın kılıcı dövüş tekniğini değiştirmek zorunda
            kalmıştır. Yeni dövüş tekniği olarak Ysalamiri Yolu'nu seçen Darth
            Vader, dövüşlerinde daha çok ışın kılıcı kullanımına önem vermiştir.
          </p>
        </div>
      )}
      <div className="sidebar__item">
        <span className="sidebar__title">KATEGORİLER</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">Bizi Takip Edin</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
