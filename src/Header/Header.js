import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Header extends React.Component {

  render() {
    return (
      <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={10000}
        cssModule={AwsSliderStyles}
      >
        <div data-src="Image 1.png" />
        <div data-src="Image 2.png" />
        <div data-src="Image 3.png" />
      </AutoplaySlider>
      </div>
    )
  }
}
