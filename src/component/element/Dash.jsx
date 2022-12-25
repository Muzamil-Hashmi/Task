import React from "react";

export default function Dash() {
  return (
    <div className="container-fluid  text-center   ">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 mt-5">
            <h5 className="text-white">% TAX to FirePit</h5>
            <h5 className="text-white fw-bold">14% Buy / 16% Sell</h5>
            <div
              className="card mt-3 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Total Supply</h5>
                <p className="card-text fw-bold">61,634,066.59</p>
              </div>
            </div>
            <div
              className="card mt-4 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Circulating Supply</h5>
                <p className="card-text fw-bold">18,894,994.58</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div
              className="card bg-transparent text-white"
              style={{ width: "18rem" }}
            >
              <div className="card-body mx-auto">
                <h3 className="fw-bold ">SAFUU PRICE</h3>
                <h5 className="card-title fw-bold">$0.35</h5>
                <br />
            <h6 className="hyper fw-bold" >Hyper-Defalting</h6>
               
                
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <h5 className="text-white">SAFUU Insurance Fund Value</h5>
            <h5 className="text-white fw-bold">$4,627</h5>

            <div
              className="card mt-3 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">MarketCap</h5>
                <p className="card-text fw-bold">$6,668,315</p>
              </div>
            </div>
            <div
              className="card mt-4 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Pool Value</h5>
                <p className="card-text fw-bold">$2,593,995</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title"># Value of FirePit</h5>
                <p className="card-text fw-bold ">42,739,072.01 SAFUU</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">$ Value of FirePit</h5>
                <p className="card-text fw-bold">$15,083,233</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent text-white"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">% FirePit : Supply</h5>
                <p className="card-text fw-bold">69.34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
