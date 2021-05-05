import "./About.scss";

import { sliderData } from "./slider/SliderData";

import ImageSlider from "./slider/ImageSlider";

export default function About() {
  return (
    <div className="About-section">
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p>
          Hello! Let me introduce myself, my name is <strong>Emily</strong>. I
          am a Food Scientist turned Software Developer based out of Toronto,
          Ontario. I have always had a curious mind and been intrigued by
          learning new skills or hobbies. That curiosity brought me to the world
          of coding and ultimately a career pivot into tech. Coding allowed me
          to challenge myself in new ways and feel fufilled in building
          applications that people could use everyday. In my free time when I am
          not coding, I enjoy travelling to new places, consuming ALL the new
          foods and dabbling in some sewing projects.
        </p>
      </div>
      <ImageSlider slides={sliderData} />
    </div>
  );
}
