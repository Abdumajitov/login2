import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [inputSave, setInputSave] = useState({
    name: "",
    password: "",
  });
  console.log(inputSave);

  const save = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputSave((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const btnSave = () => {
    if (inputSave.name && inputSave.password) {
      localStorage.setItem("user", JSON.stringify(inputSave));
      navigate("/home");
    }
  };

  return (
    <>
      <div className="cont">
        <div className="login">
          <h1>Login</h1>
          <input name="name" onChange={save} type="email" placeholder="email" />
          <input
            name="password"
            onChange={save}
            type="password"
            placeholder="password"
          />
          <button onClick={btnSave}>Log In</button>
        </div>
      </div>
    </>
  );
};

export default Login;
