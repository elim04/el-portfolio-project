import "./About.scss";
import { makeStyles } from "@material-ui/core/styles";
import { sliderData } from "./slider/SliderData";
import { Card, CardContent } from "@material-ui/core";
import ImageSlider from "./slider/ImageSlider";

const useStyles = makeStyles({
  root: {
    width: 600,
    height: 500,
    alignSelf: "center",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className="About">
      <div className="about-info"></div>
      <p>Hi</p>
      <ImageSlider slides={sliderData} />
    </div>
  );
}
