import React from "react";
import Navbar from "./Navbar/Navbar";
import { colors } from "../config";
import Header from "./Header/Header";
const containerStyles = {
  background: colors.secondary,
  color: colors.dark,
  borderRadius: "10px",
  textAlign: "center",
  padding: "10px 100px 10px 100px",
  height: "110vh",
};
const Container = () => {
  return (
    <div style={containerStyles}>
      <Navbar />
      <Header />
    </div>
  );
};

export default Container;
