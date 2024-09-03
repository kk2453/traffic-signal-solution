import React, { useState, useEffect } from "react";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  
} from "../../data";
import "./home.scss";


const Home = () => {
  // State to keep track of the active light
  const [activeLight, setActiveLight] = useState("yellow");

  // State to track whether the override is activated
  const [override, setOverride] = useState(false);

  // Example data to trigger the light toggle
  const trafficData = "yellow"; // Replace this with your dynamic data

  useEffect(() => {
    // Toggling light based on trafficData value
    if (!override) { // Only change the light if override is not active
      if (trafficData === "green") {
        setActiveLight("green");
      } else if (trafficData === "yellow") {
        setActiveLight("yellow");
      } else {
        setActiveLight("red");
      }
    }
  }, [trafficData, override]); // Re-run the effect when trafficData or override changes

  const handleOverrideClick = () => {
    setOverride(!override); // Toggle the override state
    setActiveLight("red"); // Set the light to red
  };

  return (
    <div className={`home ${override ? "override-active" : ""}`}>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box3">
        <div className="eme">Lights</div>
        <div className="black">
          {/* Conditionally render the active light */}
          <div className={`red ${activeLight === "red" ? "active" : ""}`}></div>
          <div className={`yellow ${activeLight === "yellow" ? "active" : ""}`}></div>
          <div className={`green ${activeLight === "green" ? "active" : ""}`}></div>
        </div>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box3">
        <div className="eme">Emergency</div>
      </div>
      <div className="box box98">
        <button onClick={handleOverrideClick}>OVER RIDE</button>        
     </div>
    </div>
  );
};

export default Home;
