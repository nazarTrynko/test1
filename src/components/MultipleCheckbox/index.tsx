import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { Typography } from '@mui/material';
import { CheckboxProps } from '@mui/material/Checkbox';

import Checkbox from '../Checkbox';
/* tslint:disable */
type Option = {
  label: string;
  value: boolean;
}

type Props = { value: string[], label: string, options: Array<Option>, onChange: (s: any) => void; } & CheckboxProps;

const MultipleCheckbox = ({ value, label, options, ...props }: Props) => {

  return (
    <div>
      <Typography>
        {label}
      </Typography>
      {options.map((option, index) => {
        return <Checkbox
          labelPlacement="end"
          name={`checkbox_multiple_field${index}`}
          label={option.label}
          value={option.value}
          {...props}
        />
      })}
    </div>
  )
};

export default MultipleCheckbox;