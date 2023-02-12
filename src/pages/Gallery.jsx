import React, { useState, useEffect } from "react";
import Grid from "../components/Grid/Grid";
import imageData from "../store/initImages";
import Card from "../components/Card/Card";

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
    <body>
      <Grid />
      {!matches &&
        imageData.map(({ id, src, alt }) => {
          return <Card key={id} src={src} alt={alt} />;
        })}
    </body>
  );
}

export default Gallery;
