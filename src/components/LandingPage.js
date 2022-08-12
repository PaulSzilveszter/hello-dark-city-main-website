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


export default function LandingPage() {

  const border = (<div style={{ height: "1vh", width: "100%", background: "black", position: "relative" }}></div>)


  const textBoxesParallaxStyle = { zIndex: 10, position: "fixed", height: "100vh", width: "100%", marginLeft: "100vw", marginRight: "100vw", top: "0", trasnsform: "translateY(-50%)" }

  return (
    <div id="landing-page">
      <ParallaxProvider >


        <Parallax style={textBoxesParallaxStyle} translateX={["700vw", "-700vw"]} >
          <TextBoxexLandingPage numberOfBoxes={7} overflowX={"hidden"}>



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

            {/* <div style={{height:"100vh", width:"100vw" , position:"relative",  background:"magenta"}}></div> */}


          </TextBoxexLandingPage>
        </Parallax>


        <Background position={"relative"} isMenu={true} isImage={true} Image={FirstImage} >

        </Background>



        {border}

        <Background position={"relative"} isImage={true} Image={SkyGif} style={{ overflowX: "hidden" }}>

        </Background>





        <Fill color={"black"} position={"relative"} />

        <Fill color={"aqua"} position={"relative"} />
        sss


      </ParallaxProvider>
    </div>

  );

}