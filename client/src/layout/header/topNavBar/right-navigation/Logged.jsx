import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import Dashboard from "../../../../components/Dashboard";

const Logged = () => {
  const { user } = useUser();
  const { handleGetUser } = useUsers();

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Box sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
      {user && <Dashboard src={user.imageUrl} />}
    </Box>
  );
};

export default Logged;
