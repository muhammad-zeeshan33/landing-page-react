import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  SendOutlined,
  PermIdentityOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { colors } from "../../config";

const boxStyles = {
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "-10% 10%",
  padding: "10px 0",
  height: "100%",
  borderRadius: "10px",
  boxShadow: "0 0 20px 0 rgba(0,0,0,0.2)",
};

const tabTextStyles = {
  textTransform: "none",
};

const tabContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  margin: "0 10%",
  textAlign: "left",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Stays' style={tabTextStyles} {...a11yProps(0)} />
            <Tab label='Flights' style={tabTextStyles} {...a11yProps(1)} />
            <Tab label='Cars' style={tabTextStyles} {...a11yProps(2)} />
            <Tab label='Things to do' style={tabTextStyles} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div style={tabContainerStyles}>
            <div style={{ display: "flex" }}>
              <div>
                <SendOutlined
                  style={{
                    marginTop: 20,
                    marginRight: 10,
                    transform: "rotate(-40deg)",
                    padding: 0,
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>Location</h3>
                <span style={{ marginTop: "-20px", color: colors.primary }}>
                  Where are you going?
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <PermIdentityOutlined
                  style={{
                    marginTop: 20,
                    marginRight: 10,
                    padding: 0,
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>Date</h3>
                  <span style={{ marginTop: "-20px", color: colors.primary }}>
                    Add dates
                  </span>
                </div>
                <div
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: "50%",
                    background: colors.info,
                    dipslay: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <SearchOutlined style={{ marginLeft: 7, marginTop: 7 }} />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Box>
    );
  };

  return <div style={boxStyles}>{renderTabs()}</div>;
};

export default TabMenu;
