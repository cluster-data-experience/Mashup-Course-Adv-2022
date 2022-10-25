import React from "react";
import NativeObject from "../../Components/NativeObjects";

const Home = () => {
  return (
    <div className="page">
      <div className="row">
        <div className="col-lg-12">
          <div className="view-header">
            <div className="header-icon">
              <i className="material-icons"></i>
            </div>
            <div className="header-title">
              <h3>KPI Dashboard</h3>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* kpi rows */}
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
              <NativeObject id="pdjTuNr" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
              <NativeObject id="ajMAEu" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "175px"}}>
            <div className="qvobject">
              <NativeObject id="bJSZttJ" />
            </div>
          </div>
        </div>
      </div>

      {/* piecharts */}
      <div className="row">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "250px"}}>
            <div className="qvobject">
              <NativeObject id="fNGRa" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "250px"}}>
            <div className="qvobject">
              <NativeObject id="MEAjCJ" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="panel" style={{height: "250px"}}>
            <div className="qvobject">
              <NativeObject id="nPLRub" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xs-12" style={{padding: 0}}>
        <div className="panel panel-filled" style={{height: "250px"}}>
          <div className="qvobject">
            <NativeObject id="WJYuPN" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;