import React, { useEffect } from "react";
import useUsers from "../hooks/useUsers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Typography } from "@mui/material";

const ManageUsers = () => {
  const { users, handleGetUsers } = useUsers();

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleChangeStatus = (status) => {
    console.log(status);
  };

  return (
    <>
      <Container>
        <Typography variant="h3">All Users</Typography>{" "}
        <Box>
          {" "}
          {/* table */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">User Name</TableCell>
                  <TableCell align="right">User Email</TableCell>
                  <TableCell align="right">User Id</TableCell>
                  <TableCell align="right">Is Business</TableCell>
                  <TableCell align="right">Is Admin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow
                      key={users.index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {user.name.firstName + " " + user.name.lastName}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {user.email}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {user._id}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {user.isBusiness ? "true" : "false"}
                        <Button
                          onClick={() =>
                            handleChangeStatus(
                              user.isBusiness ? "false" : "true"
                            )
                          }
                          component="th"
                          scope="row"
                          variant="outlined"
                          size="small"
                        >
                          {" "}
                          {user.isBusiness ? "false" : "true"}
                        </Button>{" "}
                      </TableCell>{" "}
                      <TableCell component="th" scope="row" align="right">
                        {user.isAdmin ? "true" : "false"}
                        <Button
                          component="th"
                          scope="row"
                          variant="outlined"
                          size="small"
                          align="right"
                        >
                          {" "}
                          {user.isAdmin ? "false" : "true"}
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/*  */}
        </Box>
      </Container>
    </>
  );
};

export default ManageUsers;
