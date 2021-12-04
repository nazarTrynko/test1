import React from "react";
import Radio from "@mui/material/Radio";
import {
  FormControlLabel,
  RadioGroup as RadioGroupMUI,
  Typography,
} from "@mui/material";
import { css } from "@emotion/css";

import { Option } from "../../common/interfaces";
import { colorMap } from "../../colorMap";

const RadioGroup = ({
  name,
  error,
  options,
  label,
  onChange,
}: {
  name: string;
  error: boolean;
  options: Array<Option<boolean>>;
  label: string;
  onChange: () => void;
}) => {
  const errorStyle = error ? { color: colorMap.ERROR } : {};

  return (
    <>
      <Typography>{label}</Typography>
      <RadioGroupMUI
        row
        name={name}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            className={css(errorStyle)}
            name={name}
            value={option.value}
            label={option.label}
            control={<Radio sx={errorStyle} />}
          />
        ))}
      </RadioGroupMUI>
    </>
  );
};

export default RadioGroup;
