
import {
  Box,
  Container,
  Stack,
  Typography,
  Tab,
  Tabs,
  Button
} from "@mui/material";
import React, { useState } from "react";


import Codedet from "./Codedet";
import PropTypes from "prop-types";
import Codenotes from "./Codenotes";
import Sectionnotes from "./Sectionnotes";
import Chapternotes from "./Chapternotes";
import '../App.css';

import { Table2 } from "./Table2";
import CustomizedTables from "./Indextable";
import BasicTabs from "./indexTabs";
import { Pagin } from "./pagination";




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
        <div>
          {children}
        </div>
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
    "aria-controls": `simple-tabpanel-${index}`
  }
}



export const Main = ({ isValueSelected }) => {
  const [showTable, setShowTable] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
   
      <Container maxWidth="4px">
        <Stack direction={"row"} gap={"10px"} mt={1}>
          <Box
            classname="indexpage"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              border: "0.5px solid black",
             

            }}
          >
            <Box sx={{marginTop:"-10px"}}>
             <Button
              variant="contained"
              sx={{
                textAlign: "center",
                mt: "-17px",
                width: "100px",
                position: "absolute",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
               textTransform:"none",
                backgroundColor: "#90B2D8",
                height:"25px"
              }}
            >
              IndexSearch
            </Button>
            <Button
              onClick={() => setShowTable(!showTable)}
              variant="contained"
              sx={{
                textAlign: "center",
                mt: "-17px",
                width: "100px",
                position: "absolute",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                ml: "100px",
                textTransform: "none",
                backgroundColor: "#90B2D8",
                height:"25px"
              }}
            >
              {showTable ? "" : ""}
              Neoplasam
            </Button>
            {showTable && <CustomizedTables />}
            <Button
              variant="contained"
              sx={{
                textAlign: "center",
                mt: "-17px",
                width: "100px",
                position: "absolute",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                ml: "200px",
                textTransform: "none",
                backgroundColor: "#90B2D8",
                height:"25px"
              }}
            >
              Drugs
            </Button>
            </Box>

            <Box
              sx={{
                height: "20px",
                width: "100%",
                textAlign: "left",
                mt: "10px",
                ml: "10px",
               

              }}
            >
              <Typography
                sx={{
                  //backgroundColor: "#ccc6ed",
                  width: "100%",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap
              >
               index search
              </Typography>
             <Pagin/>
             
            </Box>
          </Box>

          <Box
            classname="Tabularsearch"
            sx={{
              height: "590px",
              width: "50%",
              display: "flex",
              backgroundColor: "white",
              border: "0.5px solid black",
            }}
          >
            <Box
              sx={{
                height: "20px",
                width: "50%",
                mt: "10px",
                ml: "6px",

              }}
            >
              <Typography
                sx={{
                 
                  width: "100%",

                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap

              >
                Tabular Search
              </Typography>
            </Box>
            <Stack direction={"column"} ml={10} mt={10}>
              <Typography
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={" #4185d2"}
                fontWeight={600}
                ml={-24}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "136%",

                }}
              >
                Code details
              </Typography>
              <Box sx={{ marginRight: "20px" }}>
                {isValueSelected && <Codedet />}
              </Box>

              <Box
                sx={{
                  height: "300px",
                  width: "100%",
                 
                }}
              >
                <Box
                  sx={{
                    height: "30px",
                    width: "730px",
                    backgroundColor: "#c8e2dd",
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    marginLeft: "-200px",
                    mt: "20px",
                    ml: "-195px"
                  }}
                >
                <Stack direction={"row"} gap={"70px"} ml={5}  >
             
                    <Box sx={{ width: "100%"}}>
                      <Box sx={{ marginTop: "-10px"}}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          className="tabs"
                          sx={{ marginLeft: "-25px" }}
                          TabIndicatorProps={{
                            style: {
                              backgroundColor: "#4185d2",
                              width: "50px",
                              marginLeft: "50px",
                            
                            }
                          }}

                        >
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            label="  Code notes"
                            {...a11yProps(0)}

                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Section notes"
                            {...a11yProps(1)}

                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter notes"
                            {...a11yProps(2)}
                          />
                          <Tab
                            disableFocusRipple
                            disableRipple
                            disableTouchRipple
                            sx={{
                              cursor: "pointer",
                              variant: "subtitle1",
                              fontWeight: "700px",
                              color: "#4185D2",
                              textTransform: "none",
                              width: "150px",
                            }}
                            variant="subtitle1"
                            fontWeight={"700"}
                            label="Chapter guidlines"
                            {...a11yProps(3)}

                          />
                        </Tabs>
                      </Box >
                      <div
                        className="tabpanels"
                        style={{
                          height: "180px",
                          width: "660px",
                          overflowY: "scroll",
                          paddingLeft: "30px",
                         
                        }}
                      >
                        {" "}
                      <CustomTabPanel
                        value={value}
                        index={0}>
                        <Codenotes />
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                        <Sectionnotes />
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                        <Chapternotes />
                      </CustomTabPanel>

                      <CustomTabPanel value={value} index={3}></CustomTabPanel>
                      </div>
                      <Table2/>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

