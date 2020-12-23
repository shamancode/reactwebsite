import React, { useState } from "react";
import { Link } from "react-scroll";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Online Classroom Simplified</HeroH1>
        <HeroP>
          Get started right now with easy student managment and classroom
          database invintations though QR code.{" "}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/projects"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true
            "
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
