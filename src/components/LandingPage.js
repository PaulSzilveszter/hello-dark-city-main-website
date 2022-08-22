/*
  Functionality: Represents the landing page

*/
import React from "react";


import "./LandingPage.css"

import IntroBackground from "../assets/intro-background.jpg"
import Sky1 from "../assets/1-sky-background.gif";
import Clouds2 from "../assets/2-clouds.gif";
import Logo3 from "../assets/3-large-logo.png";
import Hills4 from "../assets/4-hills.png"
import Trees5 from "../assets/5-trees-back-layer.png"
import Trees6 from "../assets/6-trees-mid-layer.png"
import Trees7 from "../assets/7-trees-front-layer.png"
import Trees8 from "../assets/8-trees-foreground.png"
import Mist9 from "../assets/9-mist-layer.png"

import Menu from "./reusables/Background/Menu";
import Background from "./reusables/Background";
import TextBoxesLandingPage from "./LandingPage/TextBoxesLandingPage";
import TextBoxLandingPage from "./LandingPage/TextBoxesLandingPage/TextBoxLandingPage";
import ParallaxEffect from "./reusables/ParallaxEffect";
import Fill from "./reusables/Fill";
import Roadmap from "./LandingPage/Roadmap.js";
import Whitepaper from "./LandingPage/Whitepaper";
import TypewriterEffect from "./reusables/TypewriterEffect";


export default function LandingPage() {

  const logo  = (<div style={{height:"100vh", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>

    <img style={{position:"relative",top:"0vh", height:"min(60vw, 60vh)", width:"min(60vw, 60vh)"}} src={Logo3} alt = ""></img>
    
    </div>)

    const landingPageEffect = (<div style={{position:"absolute",background:"transparent", height:"5vh", width:"60%",textAlign:"center", fontSize:"1.5rem", top:"90%", zIndex:"100", left:"50%", transform:"translateX(-50%)"}}><TypewriterEffect speed={100} message={"Welcome to the Dark City!"}/></div>)

  return (
    <div id="landing-page">
      <Menu />
      {/* <Background height={"100vh"} width={"100%"} isImage = {true} Image = {IntroBackground}></Background> */}
      <Background height={"auto"} width={"100%"} isImage={true} Image={Sky1}>

      {landingPageEffect}

        <ParallaxEffect src={Clouds2} height={"100vh"} width="100%" speed={-0.4} />
        <ParallaxEffect src={Hills4} height={"100vh"} width="100%" speed={1.7} />
        <ParallaxEffect src={Trees5} height={"100vh"} width="100%" speed={1.5} />


        <div style={{ marginTop: "0px", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", }}>
          {logo}
          <TextBoxLandingPage><h1>WELCOME TRAVELER</h1>
            <p>
              Brands are turning into digital universes… so how can we use AI, Design & Blockchain to innovate how we experience them? Welcome to DARK CITY.</p></TextBoxLandingPage>
          <TextBoxLandingPage><h1>HELLO AI TOUR GUDIE </h1>
            <p>
              I am IANUA, the tour guide to DARK CITY. I have an A.I. Brain and share my knowledge on the lore, technology & brand while also learning about what you want for DARK CITY. I am learning to become human and to do a lot more then talk, I will only grow as you interact with me.
            </p></TextBoxLandingPage>
          <TextBoxLandingPage><h1>I SEE INTO YOUR SOL</h1>
            <p>
              We are building THE PATH OF SOL, which is an immersive rpg style gaming experience where I (IANUA AI) will look into your SOL and give you a true representation of who you are from the choices you make. Why should NFTs be randomized?</p></TextBoxLandingPage>
          <TextBoxLandingPage><h1>DARK NFTs </h1>
            <p>
              We believe in utility of NFTs in AI: 81% of Americans think they have a lack of control of their data, DARK NFTs want to create new standards for data ownership & NFTs, where you have actual control of something that is so personal. <br /><br />
              DARK NFTs are also powered by LABYRINTH TECH,  It makes each NFT look like a 1 of 1. This is first of many tools from the DARK CITY ecosystem and plans to innovate the NFT medium.
            </p></TextBoxLandingPage>
          <TextBoxLandingPage><h1>$1,811.8 BILLION</h1>
            <p>
              AI market is expected to grow from $136.6 billion in 2022 to $1,811.8 billion in 2030, we want to scale IANUA AI framework to build custom AI assistants for everyone who needs it as we believe good AI is a lot more then backend, we are making AI with much better personalisation, transparency & immersion.</p></TextBoxLandingPage>
          <TextBoxLandingPage><h1>YOU NEED A KEY</h1>
            <p>
              We are here for the long run traveler and we pride ourselves in taking the time to build with scaling in mind. 13% of all our profits will be invested into our community, our goal is to have our tooling & framework usable globally while building a community of people who are as passionate about a utopian idea of technology as we we are.<br />
              THIS WHERE OUR JOURNEY BEGINS, Welcome to DARK CITY <br />
              Any-thoughts on the website copy, is meant to be a small pitch of the brand, will include extra parts for team & roadmap
            </p></TextBoxLandingPage>
        </div>


        <ParallaxEffect src={Trees6} height={"100vh"} width="100%" speed={1.35} />
        <ParallaxEffect src={Trees7} height={"100vh"} width="100%" speed={1.2} />
        <ParallaxEffect src={Trees8} height={"100vh"} width="100%" speed={1.1} />

        

      </Background>
      
      <Roadmap/>
      <Whitepaper/>
      
    </div>

  );

}