import React from "react";
import { colors } from "../../config";
import logo from "../../assets/images/logo.png";
const Brand = () => {
  return (
    <a style={{ color: colors.dark, display: "flex" }}>
      <img
        src={logo}
        style={{
          width: 70,
          height: 40,
          borderRadius: "50%",
          marginTop: 10,
        }}
      />
      <h3 style={{ marginLeft: "-15px" }}>fleet</h3>
    </a>
  );
};

export default Brand;
