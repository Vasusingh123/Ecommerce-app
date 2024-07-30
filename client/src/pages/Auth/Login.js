import React, { useState } from "react";
import Layout from "../../components/layout/Layout.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* const response = await fetch('http://localhost:8080/api/v1/auth/register',{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    console.log("sd", await response.json());*/
    console.log(process.env.REACT_APP_API);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        formData
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went whrong");
    }
  };

  return (
    <Layout title="Login-Ecommerce">
      <div className="cont">
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login Page</h2>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
