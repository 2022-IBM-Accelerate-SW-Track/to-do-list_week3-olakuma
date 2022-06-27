import React, { Component } from "react";
import "./About.css";
import profile_pic_olamide from "../assets/profile_pic_olamide.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic_olamide}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Olamide Kumapayi</div>
            <div className="brief_description">
            I am a Sophmore at SUNY New paltz. I am a computer Science major, and a Business Analytics minor.
            My favorite sport is football(Soccer), and I love to play video games, and have fun.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
