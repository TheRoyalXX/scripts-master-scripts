import React from "react";
import { string, bool, object, func, number } from "prop-types";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

const Input = ({
  variant,
  type,
  name,
  data,
  lable,
  placeholder,
  required,
  error,
  onChange,
  minRows,
  hideValue,
  ...rest
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        multiline={true}
        variant={variant}
        label={lable}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  onChange: func,
  variant: string,
  data: object,
  minRows: number,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);
