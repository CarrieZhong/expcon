import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import GradientButton from 'react-linear-gradient-button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class Header extends React.Component {

  render() {
    const WhiteTextTypography = withStyles({
      root: {
        color: "#FFFFFF"
      }
    })(Typography);

    return (
      <div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={10000}
        cssModule={AwsSliderStyles}
      >
        <Paper style={{backgroundImage: 'url(Image%201.png)', backgroundSize: 'cover'}}>
          <CardContent>
              <WhiteTextTypography variant="h3" component="h4">
                INTERACTIVE CONCERT EXPERIENCE
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6">
                Experience your favourite artists like never before and from the comfort of your own home.
              </WhiteTextTypography>
          </CardContent>
          <CardActions style={{justifyContent: "center"}}>
            <GradientButton onClick={(e) => {e.preventDefault(); window.location.href='/pricing';}}>TRY IT NOW</GradientButton>
          </CardActions>
        </Paper>

        <Paper style={{backgroundImage: 'url(Image%202.png)', backgroundSize: 'cover'}}>
          <CardContent>
              <WhiteTextTypography variant="h3" component="h4">
                INTERACTIVE CONCERT EXPERIENCE
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6">
                Experience your favourite artists like never before and from the comfort of your own home.
              </WhiteTextTypography>
          </CardContent>
          <CardActions style={{justifyContent: "center"}}>
            <GradientButton onClick={(e) => {e.preventDefault(); window.location.href='/pricing';}}>TRY IT NOW</GradientButton>
          </CardActions>
        </Paper>

        <Paper style={{backgroundImage: 'url(Image%203.png)', backgroundSize: 'cover'}}>
          <CardContent>
              <WhiteTextTypography variant="h3" component="h4">
                INTERACTIVE CONCERT EXPERIENCE
              </WhiteTextTypography>
              <WhiteTextTypography variant="h6">
                Experience your favourite artists like never before and from the comfort of your own home.
              </WhiteTextTypography>
          </CardContent>
          <CardActions style={{justifyContent: "center"}}>
            <GradientButton onClick={(e) => {e.preventDefault(); window.location.href='/pricing';}}>TRY IT NOW</GradientButton>
          </CardActions>
        </Paper>

      </AutoplaySlider>
      </div>
    )
  }
}
