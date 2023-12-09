import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// A custom component that renders a dropdown menu
function DropdownMenu(props) {
  const { question, options, value, onChange } = props;

  return (
    <Box className="dropdown-menu">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{question}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={question}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropdownMenu;
