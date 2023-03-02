import React, { useState } from "react";

export default function AdminLoginPage() {
 const [admin,setAdmin] = useState({
  adminEmail:"",
  adminPassword:""
 })

 const handleChange = e =>{
  const {name,value} = e.target
  setAdmin({
    ...admin,
    [name]:value
  })
 }



  return (
    <section className="vh-80">
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
{console.log("admin",admin)}
        <form className="mt-5 m-5" action="">
          <h1 className="mb-5">Enter Your Details </h1>
          <div>
            <label htmlFor="adminEmail" className="form-label">
              Email address
            </label>
            <input value={admin.adminEmail} type="email" name="adminEmail" className="form-control" placeholder="Enter Your Email Address"
            onChange={handleChange}/>
          </div>

          <div>
            <label className="form-label mt-3">Password</label>
            <input
              value={admin.adminPassword}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              className="form-control mb-5"
              name="adminPassword"
              onChange={handleChange}
              placeholder="Enter Your Password"
            />
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  required
                 
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4"
          value="submit">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}
