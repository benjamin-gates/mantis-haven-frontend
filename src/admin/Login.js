import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { validateUser } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";

function Login() {
  const history = useHistory();
  const [loginError, setLoginError] = useState(null);
  const initialState = {
    user_name: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    validateUser(formData)
      .then(() => history.push("/admin/dashboard"))
      .catch(setLoginError);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "90px",
        }}
      >
        <label
          htmlFor="user_name"
          className="form-component"
          style={{ width: "300px" }}
        >
          Username:
          <input
            type="text"
            name="user_name"
            id="user_name"
            style={{ width: "180px", marginLeft: "10px" }}
            value={formData.user_name}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="password"
          className="form-component"
          style={{ width: "300px" }}
        >
          Password:
          <input
            type="text"
            name="password"
            id="password"
            value={formData.password}
            style={{ width: "180px", marginLeft: "13px" }}
            onChange={handleChange}
          />
        </label>
        <div
          className="btn-group"
          role="group"
          aria-label="login-buttons"
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "left",
            alignSelf: "left",
            margin: "0px",
          }}
        >
          <button
            type="button"
            className="btn btn-success btn-outline-light cancel"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-success btn-outline-light login"
          >
            Login
          </button>
        </div>
      </form>
      {loginError ? <ErrorAlert error={loginError} /> : null}
    </>
  );
}

export default Login;
