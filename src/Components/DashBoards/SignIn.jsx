import React, { useState } from "react";
import "./DashBoard.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SignIn() {
  const [ispassword, setispassword] = useState(true);

  const [userinfo, setuserinfo] = useState({
    username: "",
    fname: "",
    lname: "",
    address: "",
    email: "",
    password: "",
    phoneno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserinfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://assignme-work.000webhostapp.com/temp-work/userregistration.php?name=${encodeURIComponent(
          userinfo.fname
        )}%20${encodeURIComponent(userinfo.lname)}&address=${encodeURIComponent(
          userinfo.address
        )}&phone_no=${encodeURIComponent(
          userinfo.phoneno
        )}&email=${encodeURIComponent(
          userinfo.email
        )}&password=${encodeURIComponent(
          userinfo.password
        )}&login_date=${encodeURIComponent(
          new Date().toISOString().split("T")[0]
        )}&username=${encodeURIComponent(userinfo.username)}`
      );
      console.log("Registration successful:", response.data);
      // Handle success, show success message, redirect user, etc.
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="SignIn">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userinfo.username}
          onChange={handleChange}
        />
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={userinfo.fname}
          onChange={handleChange}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={userinfo.lname}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={userinfo.address}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userinfo.email}
          onChange={handleChange}
        />
        <div className="passwordcontainer">
          <label htmlFor="password">Password</label>
          <input
            type={ispassword ? "password" : "text"}
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
        <label htmlFor="phoneno">Phone Number</label>
        <input
          type="text"
          id="phoneno"
          name="phoneno"
          value={userinfo.phoneno}
          onChange={handleChange}
        />
        <p>
          Already have a account? <Link to={"/login"}>login</Link>{" "}
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default SignIn;
