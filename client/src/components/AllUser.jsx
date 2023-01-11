import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

import { GetUser, deleteUserInfo } from "../service/Api.js";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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

export default function AllUser() {
  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    let response = await GetUser();
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await deleteUserInfo(id);
    getAllUser();
  };

  useEffect(() => {
    getAllUser();
  }, []);

  console.log(users);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ maxWidth: 1000, margin: "auto", marginTop: "10px" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, id) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {id + 1}
              </StyledTableCell>
              <StyledTableCell align="left">{user.name}</StyledTableCell>
              <StyledTableCell align="left">{user.username} </StyledTableCell>
              <StyledTableCell align="left">{user.email} </StyledTableCell>
              <StyledTableCell align="left">{user.phone} </StyledTableCell>
              <StyledTableCell>
                <Button
                  variant="contained"
                  color="error"
                  style={{ marginRight: 10 }}
                  endIcon={<DeleteIcon />}
                  size="small"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<UpdateIcon />}
                  size="small"
                  component={Link}
                  to={`/update/${user._id}`}
                >
                  Update
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
