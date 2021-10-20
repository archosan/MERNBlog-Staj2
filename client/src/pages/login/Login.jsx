import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Giriş</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Kullanıcı Adı:</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Kullanıcı adınızı girin..."
          ref={userRef}
        />
        <label>Şifre:</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Şifrenizi girin..."
          ref={passwordRef}
        />
        <button disabled={isFetching} type="submit" className="loginButton">
          Giriş
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          {" "}
          Kayıt Ol
        </Link>
      </button>
    </div>
  );
}
