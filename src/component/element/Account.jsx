import React from 'react'

export default function Account() {
  return (
    <div>
     <div className="container">
        <div className="row">
        <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent text-center text-white "
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title">Your Balance</h5>
                <h1 className="card-text fw-bold">$0</h1>
                <h5 className="card-title">0 SAFUU</h5>
              </div>
            </div>
          </div>
          <div className="col-md-12">
          <div className="col-md-4">
            <div
              className="card mt-3 bg-transparent  text-white "
              style={{ width: "58rem" }}
            >
              <div className="card-body d-flex ">
                <div className="col-md-6">
                <h5 className="card-title text-start">Current Safuu Price</h5>

                </div>
                <div className="col-md-6">
                <h4 className="card-text text-white fw-bold text-end">$0.35</h4>

                </div>

               
              </div>
            </div>
          </div>
          </div>
        </div>
     </div>
    </div>
  )
}
