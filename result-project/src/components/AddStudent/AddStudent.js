import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddStudent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

export default function AddStudent() {
  const [show, setShow] = useState(false);
  const [correct, setcorrect] = useState(false);
  const [resData, setresData] = useState("");
  const correctUsermsg = "Student Added Successfully !";

  const AddStudentAdmin = async (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/registerStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        StudentName: credentials.StudentName,
        RollNumber: credentials.RollNumber,
        Email: credentials.Email,
        Password: credentials.Password,
        Field: Field,
        Department: Department,
        Class: Class,
        Marks: {
          Physics: credentials.PhysicsMarks,
          Chemistry: credentials.ChemistryMarks,
          Maths: credentials.MathsMarks,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data.errors === undefined){

      setcorrect(true);

      
        setcredentials({
          StudentName: "",
          Email: "",
          RollNumber: "",
          Password: "",
          Field: "",
          Department: "",
          Class: "",
          PhysicsMarks: "",
          ChemistryMarks: "",
          MathsMarks: "",
        });
        setField("");
        setDepartment("");
        setClass("");
        
      }else{
        setcorrect(false);
        setShow(true);
setresData(data.errors);
setcredentials({
  StudentName: "",
  Email: "",
  RollNumber: "",
  Password: "",
  Field: "",
  Department: "",
  Class: "",
  PhysicsMarks: "",
  ChemistryMarks: "",
  MathsMarks: "",
});
setField("");
setDepartment("");
setClass("");
      }
      })
      .catch((error) => {
        console.log("Fetch Error:", error);
      });
    /*var  json = .then(res => res.json())
  // json = await response.json()
  console.log(json); */

    /* if(!json.success){
    alert("Enter Valid Details!");
  } */
  };

  const [credentials, setcredentials] = useState({
    StudentName: "",
    Email: "",
    RollNumber: "",
    Password: "",
    Field: "",
    Department: "",
    Class: "",
    PhysicsMarks: "",
    ChemistryMarks: "",
    MathsMarks: "",
  });

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  /*   const [StudentName, setStudentName] = useState("");
  const [Email, setemail] = useState("");
  const [RollNumber, setrollNumber] = useState("");
  const [Password, setPassword] = useState(""); */
  const [Field, setField] = useState("");
  const [Department, setDepartment] = useState("");
  const [Class, setClass] = useState("");
  /*   const [PhysicsMarks, setPhysicsMarks] = useState("");
  const [ChemistryMarks, setChemistryMarks] = useState("");
  const [MathsMarks, setMathsMarks] = useState("");  */

  // Fields For Department
  const Btech = ["Choose Department", "CSE", "ME", "CIVIL", "ECE"];
  const Bsc = [
    "Choose Department",
    "Computer",
    "Physics",
    "Chemistry",
    "Maths",
  ];
  const BBa = ["Choose Department", "BBA_Core", "BBA_Basic"];
  const MBa = ["Choose Department", "MBA_Core", "MBA_Basic"];
  const PHD = ["Choose Department", "PHD_Core", "PHD_Basic"];
  const Law = ["Choose Department", "LAW_Core", "LAW_Basic"];

  // Field Onchange Event
  const changeSelectOptionHandler = (event) => {
    setField(event.target.value);
  };

  const changeClassOptionHandler = (event) => {
    setClass(event.target.value);
  };

  let type = null;
  let options = null;

  if (Field === "B.Tech") {
    type = Btech;
  } else if (Field === "B.sc") {
    type = Bsc;
  } else if (Field === "M.B.A") {
    type = MBa;
  } else if (Field === "B.B.A") {
    type = BBa;
  } else if (Field === "P.H.D") {
    type = PHD;
  } else if (Field === "LAW") {
    type = Law;
  }
  // Fields For Class
  const CSE = [
    "Choose Class",
    "FSA",
    "FSB",
    "AI-A",
    "AI-B",
    "AI-C",
    "CS-A",
    "DS-A",
    "DS-B",
  ];

  const ME = ["Choose Class", "A", "B"];
  const Maths = ["Choose Class", "A", "B"];
  const Computer = ["Choose Class", "A", "B"];
  const Physics = ["Choose Class", "A", "B"];
  const Chemistry = ["Choose Class", "A", "B"];
  const CIVIL = ["Choose Class", "A", "B"];
  const ECE = ["Choose Class", "A", "B"];
  const BBA_Core = ["Choose Class", "A", "B"];
  const BBA_Basic = ["Choose Class", "A", "B"];
  const MBA_Core = ["Choose Class", "A", "B"];
  const MBA_Basic = ["Choose Class", "A", "B"];
  const PHD_Core = ["Choose Class", "A", "B"];
  const PHD_Basic = ["Choose Class", "A", "B"];
  const LAW_Core = ["Choose Class", "A", "B"];
  const LAW_Basic = ["Choose Class", "A", "B"];

  const changeDepatmentOptionHandler = (event) => {
    setDepartment(event.target.value);
  };
  /** Type variable to store different array for different dropdown */

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  let Depttype = null;

  /** This will be used to create set of options that user will see */

  let Deptoptions = null;

  if (Department === "CSE") {
    Depttype = CSE;
  } else if (Department === "ME") {
    Depttype = ME;
  } else if (Department === "CIVIL") {
    Depttype = CIVIL;
  } else if (Department === "ECE") {
    Depttype = ECE;
  } else if (Department === "Computer") {
    Depttype = Computer;
  } else if (Department === "Physics") {
    Depttype = Physics;
  } else if (Department === "Maths") {
    Depttype = Maths;
  } else if (Department === "Chemistry") {
    Depttype = Chemistry;
  } else if (Department === "BBA_Core") {
    Depttype = BBA_Core;
  } else if (Department === "BBA_Basic") {
    Depttype = BBA_Basic;
  } else if (Department === "MBA_Core") {
    Depttype = MBA_Core;
  } else if (Department === "MBA_Basic") {
    Depttype = MBA_Basic;
  } else if (Department === "PHD_Core") {
    Depttype = PHD_Core;
  } else if (Department === "PHD_Basic") {
    Depttype = PHD_Basic;
  } else if (Department === "LAW_Core") {
    Depttype = LAW_Core;
  } else if (Department === "LAW_Basic") {
    Depttype = LAW_Basic;
  } else if (Department === null || Field === null) {
    Depttype = CSE;
  }

  if (Depttype) {
    Deptoptions = Depttype.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <section className="vh-80" style={{ background: "rgb(250, 230, 252)" }}>
      <div className="d-flex flex-row justify-content-around">
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjc3MjYzMzc5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            width="400"
            alt="loading  in a while....."
          />
        </div>
        <div className="p-2">
          <form className="mt-5 m-5" method="post" onSubmit={AddStudentAdmin}>
            <h1 className="mb-3">Enter Student Details </h1>
            <p className="text-danger d-inline ">
              {" "}
              Note : All Fields are Maindatory (*)
            </p>
            <br />
            <div className="mt-3">
              <label htmlFor="name" className="form-label d-inline">
                Enter Student Name
              </label>
              <input
                type="text"
                name="StudentName"
                value={credentials.StudentName}
                className="form-control mb-3"
                required
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Enter Email Address
              </label>
              <input
                type="email"
                name="Email"
                value={credentials.Email}
                className="form-control mb-3"
                required
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="rollNumber" className="form-label">
                Enter Roll Number
              </label>
              <input
                type="text"
                minLength={8}
                name="RollNumber"
                value={credentials.RollNumber}
                className="form-control mb-3"
                required
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="Password" className="form-label">
                Enter Password
              </label>
              <input
                type="password"
                minLength={8}
                name="Password"
                value={credentials.Password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="1. At least eight characters
              2. At least one number and both lower and uppercase letters and 
              3. A special characters"
                className="form-control mb-3"
                autoComplete="password"
                required
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="Field" className="form-label mb-3">
                Choose Your Field
              </label>
              <select
                className="form-select mb-4"
                aria-label="Default select example"
                name="Field"
                value={Field}
                required
                onChange={changeSelectOptionHandler}
              >
                <option>Choose Field</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.sc">B.SC</option>
                <option value="M.B.A">M.B.A</option>
                <option value="B.B.A">B.B.A</option>
                <option value="P.H.D">P.H.D</option>
                <option value="LAW">LAW</option>
              </select>
            </div>
            <label htmlFor="Field" className="form-label mb-3">
              Choose Your Department
            </label>
            <div>
              <select
                className="form-select mb-4"
                value={Department}
                onChange={changeDepatmentOptionHandler}
                required
              >
                {
                  /** This is where we have used our options variable */
                  options
                }
              </select>
            </div>
            <label htmlFor="Field" className="form-label mb-3">
              Choose Your Class
            </label>
            <div>
              <select
                className="form-select mb-4"
                value={Class}
                onChange={changeClassOptionHandler}
                required
              >
                {
                  /** This is where we have used our options variable */
                  Deptoptions
                }
              </select>
            </div>

            <div>
              <label htmlFor="PhysicsMarks" className="form-label">
                Enter Physics Marks
              </label>
              <input
                type="number"
                min={1}
                max={100}
                name="PhysicsMarks"
                value={credentials.PhysicsMarks}
                required
                className="form-control mb-3"
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="ChemistryMarks" className="form-label">
                Enter Chemistry Marks
              </label>
              <input
                type="number"
                min={1}
                max={100}
                name="ChemistryMarks"
                value={credentials.ChemistryMarks}
                required
                className="form-control mb-3"
                onChange={onChange}
              />
            </div>
            <div>
              <label htmlFor="MathsMarks" className="form-label">
                Enter Maths Marks
              </label>
              <input
                type="number"
                min={1}
                max={100}
                name="MathsMarks"
                value={credentials.MathsMarks}
                required
                className="form-control mb-3"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success btn-block mb-4 px-2 me-5"
              value="Register"
            >
              Add Student
            </button>

            <Alert show={show} variant="danger" className="mt-0">
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                {resData}
              </Alert>
            </Alert>

            <Alert show={correct} variant="success" className="mt-0">
            <Alert
                variant="success"
                onClose={() => setcorrect(false)}
                dismissible
              >
              {correctUsermsg}
              </Alert>
           
          </Alert>

            <p className="mb-4 me-5 ms-4 d-inline"></p>
            <Link
              to="/admin_dashboard"
              className="btn btn-primary btn-block mb-4 px-4 ms-5"
            >
              {" "}
              Go Back
            </Link>
          </form>
        </div>
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjc3MjYzMjQ5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            width={400}
            alt="loading in a while....."
          />
        </div>
      </div>
    </section>
  );
}
