import React from "react";
import { colors } from "../../config";
import headerImg from "../../assets/images/header-bg.jpg";
import TabMenu from "../TabMenu/TabMenu";

const headerStyle = {
  backgroundImage: `url(${headerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "10px",
  height: "80vh",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const headingStyle = {
  color: colors.dark,
  fontSize: "5rem",
  letterSpacing: "0.2rem",
  textAlign: "center",
  margin: "0",
  padding: "0",
};

const textStyles = {
  color: colors.dark,
  fontSize: "1.2rem",
  letterSpacing: "0.2rem",
  textAlign: "center",
  margin: "20px 0",
  padding: "0",
};

const btnStyles = {
  background: colors.info,
  color: colors.secondary,
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  outline: "none",
  fontSize: "0.8rem",
  borderRadius: "50px",
  "&:hover": {
    background: colors.info,
  },
};

const Header = () => {
  return (
    <div>
      <div style={headerStyle}>
        <div>
          <h1 style={headingStyle}>Things to do</h1>
          <p style={textStyles}>Find and book a great experience</p>
          <a style={btnStyles}>Start your search</a>
        </div>
      </div>
      <TabMenu />
    </div>
  );
};

export default Header;
