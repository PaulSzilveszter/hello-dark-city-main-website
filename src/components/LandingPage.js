/*
  Functionality: Represents the landing page

*/


import React from "react";

import "./LandingPage.css"

import Background from "./reusables/Background";

import Gif from "../assets/ianua-background.gif";
import Image from "../assets/background-black-overlay.png";

import Sky1 from "../assets/1-sky-background.gif";
import Clouds2 from "../assets/2-clouds.gif";
import Logo3 from "../assets/3-large-logo.png";
import Hills4 from "../assets/4-hills.png"
import Trees5 from "../assets/5-trees-back-layer.png"
import Trees6 from "../assets/6-trees-mid-layer.png"
import Trees7 from "../assets/7-trees-front-layer.png"
import Trees8 from "../assets/8-trees-foreground.png"
import Mist9 from "../assets/9-mist-layer.png"

import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import ParallaxEffect from "./reusables/ParallaxEffect";

export default function LandingPage() {



  return (
    <>

      <div style={{height:"300vh", width:"100%"}}>
      <img src={Sky1} style={{height:"300vh", width:"100%"}}></img>
      <ParallaxEffect src = {Clouds2} height={"100vh"} width="100%" speed={0.3}/>
      <ParallaxEffect src = {Hills4} height={"100vh"} width="100%" speed={0.4}/>
      <ParallaxEffect src = {Trees5} height={"100vh"} width="100%" speed={0.5}/>
      <ParallaxEffect src = {Trees6} height={"100vh"} width="100%" speed={0.6}/>
      <ParallaxEffect src = {Trees7} height={"100vh"} width="100%" speed={0.68}/>
      <ParallaxEffect src = {Trees8} height={"100vh"} width="100%" speed={0.6}/>
      
      </div>

      <div style={{zIndex:10, height:"100vh", width:"100%", background:"red"} }></div>
      <div style={{height:"100vh", width:"100%"}}></div>


      {/* <div style={{ height: "100vh", width: "100%", background: "red" }}></div> */}

      {/* <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: Sky1, speed: -10 },
            { image: Clouds2, speed: -9 },
            { image: Hills4, speed: -1},
            { image: Trees5, speed: -16 },
            { image: Trees6, speed: -6 },
            { image: Trees7, speed: -5 },
          ]}
          style={{ height: '100vh', width: '100%' }}
        />



      </ParallaxProvider> */}

      <div style={{ height: "100vh", width: "100%", background: "none" }}></div>


    </>

  );

}