import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import GradientButton from 'react-linear-gradient-button';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Header extends React.Component {

  render() {
    const centered = {
      position: "absolute",
      top: "400px",
      left: "0",
      width: "100%"
    };
    const bigText = {
      fontSize: 50,
      color: "white"
    };
    const text = {
      color: "white",
      padding: "20px"
    };
    const centerStyle = {
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={10000}
        cssModule={AwsSliderStyles}
      >
        <div style={{position: "relative", flex: 1}} >
          <img src="Image 1.png" alt="" />
          <h2 style={centered}>
            <span style={{...centerStyle, ...bigText}}>INTERACTIVE CONCERT EXPERIENCE</span>
            <span style={{...centerStyle, ...text}}>Experience your favourite artists like never before and from the comfort of your own home.</span>
            <div style={centerStyle}>
              <GradientButton onClick={() => alert("hello")}>TRY IT NOW</GradientButton>
            </div>
          </h2>
        </div>
        <div style={{position: "relative", flex: 1}} >
          <img src="Image 2.png" alt="" />
          <h2 style={centered}>
            <span style={{...centerStyle, ...bigText}}>INTERACTIVE CONCERT EXPERIENCE</span>
            <span style={{...centerStyle, ...text}}>Experience your favourite artists like never before and from the comfort of your own home.</span>
            <div style={centerStyle}>
              <GradientButton onClick={() => alert("hello")}>TRY IT NOW</GradientButton>
            </div>
          </h2>
        </div><div style={{position: "relative", flex: 1}} >
          <img src="Image 3.png" alt="" />
          <h2 style={centered}>
            <span style={{...centerStyle, ...bigText}}>INTERACTIVE CONCERT EXPERIENCE</span>
            <span style={{...centerStyle, ...text}}>Experience your favourite artists like never before and from the comfort of your own home.</span>
            <div style={centerStyle}>
              <GradientButton onClick={() => alert("hello")}>TRY IT NOW</GradientButton>
            </div>
          </h2>
        </div>
      </AutoplaySlider>
      </div>
    )
  }
}
