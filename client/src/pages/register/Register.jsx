import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Kayıt Ol</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Kullanıcı Adı</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Şifre</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Kayıt Ol
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Giriş Yap
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Lütfen tekrar deneyiniz
        </span>
      )}
    </div>
  );
}
