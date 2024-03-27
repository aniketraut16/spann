import React, { useState } from "react";

function Login() {
  const [ispassword, setispassword] = useState(true);
  const [userinfo, setuserinfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserinfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(userinfo);
  };
  return (
    <div className="SignIn">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type={ispassword ? "password" : "text"}
          id="username"
          name="username"
          value={userinfo.username}
          onChange={handleChange}
        />
        <div className="passwordcontainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userinfo.password}
            onChange={handleChange}
          />
          {ispassword ? (
            <i
              className="fa-regular fa-eye"
              onClick={() => setispassword(!ispassword)}
            ></i>
          ) : (
            <i
              className="fa-regular fa-eye-slash"
              onClick={() => setispassword(!ispassword)}
            ></i>
          )}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
