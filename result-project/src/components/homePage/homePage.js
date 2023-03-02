import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";


// import Blur_Background from "./../../src/images/back.png";

export default function homePage() {
  return (
    <div className="background d-flex flex-column">
      <p className="left_text">
        <span className="d-flex justify-content-end mb-auto">
          W<span className="Red_Span">el</span>Come
        </span>
        <br />
        <span className="d-flex justify-content-end mb-auto">To</span>
        <span className="d-flex justify-content-end mb-auto">
          <br />R<span className="Red_Span">esult</span> Checker
        </span>
      </p>
      <div className="text-center d-flex flex-row justify-content-center flex-wrap">
        <Link to="/admin_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 m-auto">
          Click Here For Admin Portal
        </button>
        
        </Link>
        <Link to="/student_login_page" className="m-auto">
        <button type="button" className="btn btn-light  btn-block p-2 m-auto">
          Click Here For Student Portal
        </button>
        </Link>
      </div>
    </div>
  );
}
