import React from "react";
import { node, func, string, number, object } from "prop-types";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import FormButton from "./FormButton";
const Form = ({
  title,
  onSubmit,
  onReset,
  onChange,
  to,
  color,
  spacing,
  styles,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
    >
      <Typography align="center" variant="h4" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={12} sm={6}>
          <FormButton
            node="cancle"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(to)}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            node={<LoopIcon />}
            onClick={onReset}
            component="div"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormButton
            node="Submit"
            onClick={onSubmit}
            disabled={!!onChange()}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

Form.propTypes = {
  children: node.isRequired,
  onSubmit: func.isRequired,
  color: string,
  to: string.isRequired,
  spacing: number,
  onReset: func.isRequired,
  onChange: func.isRequired,
  title: string.isRequired,
  styles: object,
};

Form.defaultProps = {
  color: "inherit",
  to: "/",
  spacing: 1,
  title: "",
  styles: {},
};

export default React.memo(Form);
