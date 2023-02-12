import React from "react";
import HomeSec1 from "../components/HomeSec1/HomeSec1";
import { motion } from "framer-motion";
import "./Home.scss";

function Home() {
  return (
    <motion.body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video autoPlay muted loop style={{ width: "100%" }}>
        <source src="/assets/introVideo.mp4" type="video/mp4" />
      </video>
      <HomeSec1 />
    </motion.body>
  );
}

export default Home;
