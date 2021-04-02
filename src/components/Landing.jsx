import Typewriter from "typewriter-effect";
import "./Landing.scss";
export default function Landing() {
  return (
    <div className="introduction">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, I'm Emily and I am a web developer.")
            .start();
        }}
      />
    </div>
  );
}
