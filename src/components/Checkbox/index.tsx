import React from "react";
import CheckboxMUI, { CheckboxProps } from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

type Props = {
  label: string;
  labelPlacement: "end" | "start" | "top" | "bottom";
} & CheckboxProps;

const Checkbox = ({ label, labelPlacement = "end", ...props }: Props) => {
  return (
    <FormControlLabel
      control={<CheckboxMUI {...props} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Checkbox;
