import {
  Box,
  Container,
  Stack,
  Typography,
  Button
} from "@mui/material";
import Codedet from "./Codedet";
import '../App.css';
import CustomizedTables from "./Indextable";
import { Pagin } from "./pagination";
import Tabeffect from "./Tabeffect";
import { useState } from "react";
import { Table2 } from "./Table2";

export const Main = ({ isValueSelected }) =>
{
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
             }}>
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
              }}>
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
                ml: "10px", }}>
              <Typography
                sx={{
                  width: "100%",
                }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap >
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
                  width: "100%", }}
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={"black"}
                noWrap >
                Tabular Search
              </Typography>
            </Box>
              <Stack direction={"column"} ml={-30} mt={10}>
               <Typography
                className="codedetails"
                variant="subtitle1"
                fontFamily={"sans-serif"}
                color={" #4185d2"}
                fontWeight={600}
                ml={-28}
                sx={{
                  borderBottom: "0.3px solid grey",
                  width: "132%",
                }}
              >
                Code details
              </Typography>
              <Box sx={{ marginRight: "20px" }}>
                {isValueSelected && <Codedet />}
              </Box>
              <Box
                sx={{
                  height: "500px",
                  width: "930px",
                  ml: "-100px",
                  overflowY: "scroll",
                  mt: "10px"
                }}
              >  <Tabeffect />   
              <Table2/>
              </Box>  
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

