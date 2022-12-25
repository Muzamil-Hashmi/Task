import React from "react";
import {
  AiOutlineTable,
  AiOutlineSwap,
  AiOutlineCalculator,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrAnalytics, GrDocumentOutlook } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { HiOutlineDocument } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Dashbord() {
  return (
    <div className="container-fluid  dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link to="/Dash">
              <img className="w-75 ms-4" src="/assets/logo.png" alt="" /> <br />
            </Link>{" "}
            <Link className="btn Abtn fw-bold btn-primary mt-3 w-100" to="/Dash">
              {" "}
              <AiOutlineTable size={20}  /> Dashbord
            </Link>{" "}
            <br />
            <Link className="btn Abtn btn-primary mt-3 fw-bold   w-100 " to="/Account">
              <RiAccountCircleLine  size={20} /> Account
            </Link>
            <br />
            <Link className="btn Abtn  fw-bold btn-primary mt-3 w-100" to="/Swap">
              <AiOutlineSwap size={20}  /> Swap
            </Link>
            <br />
            <Link className="btn Abtn fw-bold btn-primary mt-3 w-100" to="/Docs">
              <HiOutlineDocument size={20} /> Docs
            </Link>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
