import "./About.scss";
import { makeStyles } from "@material-ui/core/styles";
import { sliderData } from "./slider/SliderData";
import { Card, CardContent } from "@material-ui/core";
import ImageSlider from "./slider/ImageSlider";

const useStyles = makeStyles({
  root: {
    width: 700,
    height: 600,
    alignSelf: "center",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div className="About">
      <ImageSlider slides={sliderData} />
      <Card className={classes.root}>
        <CardContent>Hi I am emily!</CardContent>
      </Card>
    </div>
  );
}
