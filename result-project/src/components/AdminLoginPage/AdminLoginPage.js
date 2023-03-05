import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLogin.css";
import { Alert } from "react-bootstrap";

// const admin = require('./assets/images/admin.png');

export default function AdminLoginPage() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [correct, setcorrect] = useState(false);

  const [resData, setresData] = useState("");
  const correctUsermsg = "Redirecting to DashBoard !";

  const [admin, setAdmin] = useState({
    adminEmail: "",
    adminPassword: "",
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const loginAdmin = async (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminEmail: admin.adminEmail,
        adminPassword: admin.adminPassword,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.errors === undefined) {
          setcorrect(true);
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          setShow(true);
          setresData(resData.errors);
return resData;
        }
      })
      .catch((err) => {
        console.log("fetch error" + err);
      });
  };

  return (
    <section className="vh-100">
      <div className="d-flex flex-row justify-content-around">
        {/* cont 1 */}
        <div className="m-0 p-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="image-fluid"
            alt="sample"
          />
        </div>

        {/* Cont 2 */}

        <form className="mt-5 me-5" method="post" onSubmit={loginAdmin}>
          <img src="https://www.linkpicture.com/q/admin.png" className="ms-4 admin_image" alt="admin" srcSet=""/>
          <h1 className="mb-5">Enter Your Details </h1>
          <div>
            <label htmlFor="adminEmail" className="form-label">
              Email address
            </label>
            <input
              value={admin.adminEmail}
              type="email"
              name="adminEmail"
              className="form-control"
              placeholder="Enter Your Email Address"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label mt-3">Password</label>
            <input
              value={admin.adminPassword}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
              className="form-control mb-5"
              name="adminPassword"
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            value="submit"
          >
            Sign in
          </button>
          <Alert show={show} variant="danger" className="mt-0">
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {resData}
            </Alert>
          </Alert>

          <Alert show={correct} variant="success" className="mt-0">
            {correctUsermsg}
          </Alert>
        </form>
      </div>
    </section>
  );
}
