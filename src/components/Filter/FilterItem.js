import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const FilterItem = (props) => {
  const [filter, setFilter] = useState("");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <FormControl sx={props.sx} size="small">
      <InputLabel id="demo-select-small">{props.filterName}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filter}
        label={props.label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>{props.value}</MenuItem>
        <MenuItem value={20}>{props.value1}</MenuItem>
        <MenuItem value={30}>{props.value2}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterItem;
