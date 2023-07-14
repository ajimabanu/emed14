import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ gap: "5px" }}>
        <Tabs
          sx={{
            width: "730px",
            border: "0.2px soid blue",
            
            
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          
           /*TabIndicatorProps={{
            style: {
              marginLeft: "8px",
              transition: "1s",
              height: "70%",
              backgroundColor: "#203fac",
              opacity: 0.3,
              width:"10px"
            },
          }}  */
        >
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="A"
            {...a11yProps(0)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "0px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="B"
            {...a11yProps(1)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "0px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="C"
            {...a11yProps(2)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="D"
            {...a11yProps(3)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="E"
            {...a11yProps(4)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="F"
            {...a11yProps(5)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="G"
            {...a11yProps(6)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="H"
            {...a11yProps(7)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="I"
            {...a11yProps(8)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="J"
            {...a11yProps(9)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="K"
            {...a11yProps(10)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="L"
            {...a11yProps(11)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="M"
            {...a11yProps(12)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="N"
            {...a11yProps(13)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="O"
            {...a11yProps(14)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="P"
            {...a11yProps(15)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="Q"
            {...a11yProps(16)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="R"
            {...a11yProps(17)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="S"
            {...a11yProps(18)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="T"
            {...a11yProps(19)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="U"
            {...a11yProps(20)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="V"
            {...a11yProps(21)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="W"
            {...a11yProps(22)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="X"
            {...a11yProps(23)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="Y"
            {...a11yProps(24)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
          <Tab
            disableFocusRipple
            disableTouchRipple
            label="Z"
            {...a11yProps(25)}
            sx={{
              cursor: "pointer",
              variant: "subtitle1",
              fontWeight: "700px",
              color: "#4185d2",
              textTransform: "none",
              width: "5px",
            }}
          />
        </Tabs>
      </Box>
      <Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={8}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={9}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={10}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={11}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={12}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={13}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={14}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={15}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={16}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={17}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={18}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={19}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={20}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={21}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={22}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={23}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={24}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={25}>
          Item Two
        </CustomTabPanel>
      </Box>
    </Box>
  );
}