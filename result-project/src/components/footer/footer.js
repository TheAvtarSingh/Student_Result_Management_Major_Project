import React from "react";
import "./footer.css";
import { FaHeart } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="text-center text-white footer-color mt-2">
      <div className="container p-3">
        <section className="mb-2">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>
                Made with <FaHeart /> | Avtar Singh | &copy;{" "}
                {new Date().getFullYear()}
              </strong>
            </p>
          </div>
        </div>
          <a
            href="https://www.linkedin.com/in/theavtarsingh"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/avtarsinghr70"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/Avtar2k2"
            className="btn btn-outline-light btn-floating m-1"
            role="button"
          >
            Twitter
          </a>
        </section>
        
      </div>
    </footer>
  );
}
