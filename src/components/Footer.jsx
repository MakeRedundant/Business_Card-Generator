import { StyledFooter } from "../styled/FooterStyled";

const Footer = () => {
    return (
      <StyledFooter>
        <div className="text1" aria-label="contributor">
          Made by&nbsp;
          <a
            rel="noreferrer"
            aria-label="github profile"
            href="https://github.com/MakeRedundant"
          >
            Brian Trang
          </a>
        </div>
      </StyledFooter>
    );
  };
  
  export default Footer;
  