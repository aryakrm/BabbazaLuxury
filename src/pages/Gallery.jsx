import React, { useState, useEffect } from "react";
import Grid from "../components/Grid/Grid";
import imageData from "../store/initImages";
import Card from "../components/Card/Card";
import { motion } from "framer-motion";

function Gallery() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 700px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <motion.body
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Grid />
      {!matches &&
        imageData.map(({ id, src, alt }) => {
          return <Card key={id} src={src} alt={alt} />;
        })}
    </motion.body>
  );
}

export default Gallery;
