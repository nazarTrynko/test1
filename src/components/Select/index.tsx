import React from "react";
import SelectMUI from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";

import { Option } from "../../common/interfaces";

const Select = ({
  name,
  label,
  value,
  options,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  options: Array<Option<string>>;
  onChange: () => void;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectMUI name={name} value={value} label={label} onChange={onChange}>
        {options.map(({ label, value }, index) => {
          return (
            <MenuItem key={index} value={value}>
              {label}
            </MenuItem>
          );
        })}
      </SelectMUI>
    </FormControl>
  );
};

export default Select;
