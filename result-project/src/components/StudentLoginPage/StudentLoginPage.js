import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

export default function StudentLoginPage() {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [correct, setcorrect] = useState(false);
 
  const [resData, setresData] = useState("");
  const correctUsermsg = "Redirecting to DashBoard !";
  

  const [credentials, setcredentials] = useState({
    RollNumber: "",
    Password: "",
  });

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const loginStudent = async (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/loginStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RollNumber: credentials.RollNumber,

        Password: credentials.Password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.errors === undefined) {
          setcorrect(true);
           setTimeout(()=>{ navigate("/") }, 5000);
          
        } else {
          setShow(true);
          setresData(resData.errors);
         
          return resData;
        }
      })

      .catch((err) => {
        console.log("fetch error" + err);
      });
    /* .then(function(res){
      res.json().then(function(data) {
          console.log(data);
          navigate("/")
      });
  }).catch(function(error) {
      console.log('Fetch Error:', error);
  }); */

    /* await res.then(function(data) {
   
    
    if(data.status===200){
      navigate("/")
    }else{
      alert(...res.headers);
    }
}); */
  };

  return (
    <section className="vh-80">
      <div className="d-flex flex-row justify-content-around">
        {/* cont 1 */}
        <div className="mt-2 p-0">
          <img
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="image-fluid"
            alt="Please Connect Your Internet !!"
          />
        </div>

        {/* Cont 2 */}
        <form className="mt-3 m-5" method="post" onSubmit={loginStudent}>
          <Alert show={show} variant="danger" className="mt-0">
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {resData}
            </Alert>
          </Alert>

          <Alert show={correct} variant="success" className="mt-0">
            
              {correctUsermsg}
           
          </Alert>
          

          <h1 className="mb-4 mt-3">Enter Your Details </h1>
          <p className="text-danger d-inline">
            {" "}
            Note : All Fields are Maindatory (*)
          </p>
          <br />
          <div className="mt-3">
            <label htmlFor="studentRollNumber" className="form-label">
              Roll Number
            </label>
            <input
              type="text"
              name="RollNumber"
              value={credentials.RollNumber}
              className="form-control"
              placeholder="Enter Your Roll Number"
              required
              onChange={onChange}
            />
          </div>

          <div>
            <label className="form-label mt-3">Password</label>
            <input
              name="Password"
              value={credentials.Password}
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="1. At least eight characters
              2. At least one number and both lower and uppercase letters and 
              3. A special characters"
              required
              className="form-control mb-5"
              onChange={onChange}
              placeholder="Enter Your Password"
            />
          </div>

          <div className="row mb-5">
            <div className="col d-flex justify-content-left">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
               
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block px-5 mx-5"
            value="login"
          >
            Sign in
          
          </button>

       
        </form>
        
      </div>
      
    </section>
  );
}
