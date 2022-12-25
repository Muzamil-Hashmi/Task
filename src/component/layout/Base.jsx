import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashbord from "./Dashbord";

export default function Base(props) {
  return (
    <>
      <Header />
      <div className="container-fluid pt-2">
        <div className="row pt-5">
          <div className="d-none  d-md-block border ms-3 pb-5 border-success   col-md-2 pt-5 ">
            <Dashbord />
          </div>
          <div className="col-md-9 pt-5">{props.children};</div>
        </div>
      </div>
    </>
  );
}
