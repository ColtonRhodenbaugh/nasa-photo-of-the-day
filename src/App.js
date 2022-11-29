import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from'./Components/NasaPhoto';

const dummyData = {
  date: "2022-11-29",
  explanation: "Because the Gum Nebula is the closest supernova remnant, it is actually hard to see.  Spanning 40 degrees across the sky, the nebula appears so large and faint that it is easily lost in the din of a bright and complex background.  The Gum Nebula is highlighted nicely in red emission toward the right of the featured wide-angle, single-image photograph taken in late May. Also visible in the frame are the Atacama Desert in Chile in the foreground, the Carina Nebula in the plane of our Milky Way galaxy running diagonally down from the upper left, and the neighboring Large Magellanic Cloud (LMC) galaxy. The Gum Nebula is so close that we are much nearer the front edge than the back edge, each measuring 450 and 1500 light years respectively.  The complicated nebula lies in the direction of the constellations of Puppis and Vela.  Oddly, much remains unknown about the Gum Nebula, including the timing and even number of supernova explosions that formed it.",
  hdurl: "https://apod.nasa.gov/apod/image/2211/Gum_Lima_1365.jpg",
  title: "The Gum Nebula Supernova Remnant"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="App">
     {data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
/**
 * 
date: "2022-11-29"
explanation: "Because the Gum Nebula is the closest supernova remnant, it is actually hard to see.  Spanning 40 degrees across the sky, the nebula appears so large and faint that it is easily lost in the din of a bright and complex background.  The Gum Nebula is highlighted nicely in red emission toward the right of the featured wide-angle, single-image photograph taken in late May. Also visible in the frame are the Atacama Desert in Chile in the foreground, the Carina Nebula in the plane of our Milky Way galaxy running diagonally down from the upper left, and the neighboring Large Magellanic Cloud (LMC) galaxy. The Gum Nebula is so close that we are much nearer the front edge than the back edge, each measuring 450 and 1500 light years respectively.  The complicated nebula lies in the direction of the constellations of Puppis and Vela.  Oddly, much remains unknown about the Gum Nebula, including the timing and even number of supernova explosions that formed it."
hdurl: "https://apod.nasa.gov/apod/image/2211/Gum_Lima_1365.jpg"
title: "The Gum Nebula Supernova Remnant"
 */