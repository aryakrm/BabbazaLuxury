import React from "react";
import HomeSec1 from "../components/HomeSec1/HomeSec1";
import "./Home.scss";

function Home() {
  return (
    <body>
      <video autoPlay muted loop style={{ width: "100%" }}>
        <source src="/assets/introVideo.mp4" type="video/mp4" />
      </video>
      <HomeSec1 />
    </body>
  );
}

export default Home;
