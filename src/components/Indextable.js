import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
backgroundColor:"#90B2D8",
height:"50px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function CustomizedTables() {
  return (
    <>
      <TableContainer
        sx={{
          mt: "90px",
          display: "flex",
          position: "absolute",
          width: "830px",
          ml: "-115px",
          height: "500px",
        }}
      >
        <Table sx={{ minWidth: "100px", height: "450px" }}>
          <TableHead sx={{height:"2px"}}>
            <TableRow>
              <StyledTableCell>
                <input placeholder="filter"
                  style={{
                    width: "100px",
                    marginLeft: "-10px",

                  }}
                ></input>
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">Maligent</StyledTableCell>
              <StyledTableCell align="right">behaviour</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableHead sx={{height:"5px"}}>
            <TableRow>
              <StyledTableCell>N-Term</StyledTableCell>
              <StyledTableCell align="right">Primary</StyledTableCell>
              <StyledTableCell align="right">Secondary</StyledTableCell>
              <StyledTableCell align="right">Cainsitu</StyledTableCell>
              <StyledTableCell align="right">benigin</StyledTableCell>
              <StyledTableCell align="right">unsertain</StyledTableCell>
              <StyledTableCell align="right">unspecified</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {}
                </StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
                <StyledTableCell align="right">{}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}