import {
  CardWrap,
  CardStyled,
  MainContentWrapperStyled,
  IntroductionWrapperStyled,
} from "../styled/StyledCard";
import { ImageWrapperStyled, ImageLayer } from "../styled/ImageStyled";
import { HeadingStyled } from "../styled/Headings";
import Introduction from "./Introduction";
import About from "./About";
import Email from "./Email";
import location from "../assets/profile_picture.webp";
import { Button } from "../styled/UserInputSection";
import { Tilt } from "react-tilt";

const Card = (props) => {
  var src = {
    img_src: props.image_src,
  };
  if (
    document.querySelector("#image") == null ||
    document.querySelector("#image").files.length === 0
  ) {
    src.img_src = location;
  }

  // card JSX element
  const cardWithStylesJSX = (
    <CardStyled className="card" id="card" colors={props.colors}>
        <ImageWrapperStyled>
            <ImageLayer image_src={src.img_src} />
        </ImageWrapperStyled>
        <MainContentWrapperStyled>
            <IntroductionWrapperStyled>
                <Introduction name={props.name} occupation={props.occupation} website={props.website} colors={props.colors} />
                <About about={props.about} services={props.services} colors={props.colors} />
                <Email email={props.email} colors={props.colors} />
            </IntroductionWrapperStyled>
        </MainContentWrapperStyled>
    </CardStyled>
);

  return (
    <>
      <CardWrap id="cardwrap">
        <HeadingStyled>Live Preview</HeadingStyled>
        {props.breakpoint <= 43 ? (
          cardWithStylesJSX
        ) : (
          <Tilt
            className="Tilt"
            options={{
              max: 20,
              scale: 1.01,
              perspective: 1100,
              speed: 500,
              reverse: false,
              transition: true,
            }}
          >
            {cardWithStylesJSX}
          </Tilt>
        )}
        <Button
          className="for-mobile download_btn"
          disabled={props.downloadable ? false : true}
          title={props.downloadable ? "" : "Please fill out all fields"}
          onClick={() => {
            props.download_fun();
          }}
        >
          <div className="content">
            Download
            <i
              className={
                props.download_state
                  ? "fas fa-circle-notch load"
                  : "fas fa-download"
              }
            ></i>
            {!props.downloadable && (
              <div className="warn">Please fill out all the fields</div>
            )}
          </div>
        </Button>
      </CardWrap>
    </>
  );
};

Card.defaultProps = {
  name: "Brian Trang",
  email: "brian.trang@otmail.com",
  occupation: "Software Engineer",
  website: "https://brian-trang-portfolio.netlify.app",
  linkedin: "https://www.linkedin.com/in/brian-t-99916a118",
  about: (
    <>
      <div>
        My name is Brian, and I'm a software engineer 💻 based in Australia, Sydney 🦘 🐨.
      </div>
      <div>
        I like to eat good clothes 👔 and wear good food 🍔
      </div>
    </>
  ),
  services:
    "I offer Full stack development skills ",
  
  github: "https://github.com/MakeRedundant",
  image_src: location,
};

export default Card;
