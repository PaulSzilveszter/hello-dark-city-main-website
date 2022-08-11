/*
  Functionality: Represents the landing page

*/


import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

import "./LandingPage.css"

import Background from "./reusables/Background";
import TextBoxexLandingPage from "./LandingPage/TextBoxesLandingPage";
import Fill from "./reusables/Fill";

import TextBoxesLandingPage from "./LandingPage/TextBoxesLandingPage";
import TextBoxLandingPage from "./LandingPage/TextBoxesLandingPage/TextBoxLandingPage";

import FirstImage from "../assets/intro-background.jpg";
import SkyGif from "../assets/1-sky-background.gif";
import { ParallaxLayer } from "@react-spring/parallax";

export default function LandingPage() {

  const border = (<div style={{ height: "10px", width: "100%", background: "black", position: "relative" }}></div>)

  return (
    <div id="landing-page">
      <ParallaxProvider>
      <Background position={"relative"} isMenu={true} isImage={true} Image={FirstImage} />

      {border}

      <Background position={"relative"} isImage={true} Image={SkyGif} style={{overflowX:"hidden" }}>


       {/* <ParallaxProvider>*/}
        <Parallax translateX={["100vw", "-600vw"]} > 
        <TextBoxexLandingPage numberOfBoxes={6} overflowX={"hidden"}> 
          
          {/* <div style ={{height:"25vh", width:"100%", position:"relative"}}></div> */}
          
          <TextBoxLandingPage></TextBoxLandingPage>
          
          
          <TextBoxLandingPage></TextBoxLandingPage>

          <TextBoxLandingPage></TextBoxLandingPage>

          <TextBoxLandingPage></TextBoxLandingPage>

          <TextBoxLandingPage></TextBoxLandingPage>

          <TextBoxLandingPage></TextBoxLandingPage>

        
         

        </TextBoxexLandingPage>
         </Parallax>
      {/* </ParallaxProvider> */}
      
      
      </Background>

     

      

      

      <Fill color={"aqua"} position={"relative"}/>


      {/* <TextBoxexLandingPage/> */}
      </ParallaxProvider>
    </div>

  );

}