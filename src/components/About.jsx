import "./About.scss";
import { SliderData } from "./slider/SliderData";
import { Card, CardContent } from "@material-ui/core";
import ImageSlider from "./slider/ImageSlider";

export default function About() {
  return (
    <div className="About">
      <ImageSlider slides={SliderData} />
      <Card>
        <CardContent>Hi I am emily!</CardContent>
      </Card>
    </div>
  );
}
