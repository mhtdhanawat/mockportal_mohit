import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CustomInputFeild = ({ label, onChange, value }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
    </Box>
  );
};

export default CustomInputFeild;
