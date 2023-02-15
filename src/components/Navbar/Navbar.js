import React from "react";
import Brand from "./Brand";
import { Language, NotificationsOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { colors } from "../../config";
const navbarStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 10%",
};

const leftMenuStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const rightMenuStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const dropDownStyles = {
  border: "none",
  background: "none",
  color: colors.primary,
  marginTop: 3,
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
  borderRadius: "5px",
};

const verticalSeperatorStyles = {
  borderLeft: "1px solid #ddd",
  height: "30px",
  margin: "15px 10px",
};

const menuItemStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  cursor: "pointer",
  borderRadius: "5px",
  "&:hover": {
    background: colors.light,
  },
};

const Navbar = () => {
  return (
    <div style={navbarStyles}>
      <div style={leftMenuStyles}>
        <Brand />
        <div style={verticalSeperatorStyles}></div>
        <select style={dropDownStyles}>
          <option value=''>Travelors</option>
          <option value=''>Tesla</option>
          <option value=''>Toyota</option>
        </select>
      </div>
      <div style={rightMenuStyles}>
        <div style={menuItemStyles}>
          <a href='#'>Support</a>
        </div>
        <div style={menuItemStyles}>
          <Language
            style={{ fontSize: 17, color: colors.primary, marginTop: 5 }}
          />
          <a href='#' style={{ marginLeft: 10 }}>
            Language
          </a>
        </div>
        <div
          style={{
            ...menuItemStyles,
            border: "1px solid #ddd",
            borderRadius: "50px",
            marginLeft: 20,
            // marginRight: 10,
          }}
        >
          <a href='#' style={{ fontWeight: "bold", color: "#444" }}>
            <b>List your property</b>
          </a>
        </div>
        <div style={menuItemStyles}>
          <NotificationsOutlined />
        </div>
        <div style={menuItemStyles}>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
