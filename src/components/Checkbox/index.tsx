import React from 'react';
import { jsx } from '@emotion/react'
import CheckboxMUI, { CheckboxProps } from '@mui/material/Checkbox';
import { FormControlLabel, Typography } from '@mui/material';
import styled from '@emotion/styled';

type Props = { label: string, labelPlacement: 'end' | 'start' | 'top' | 'bottom' } & CheckboxProps;

const CheckboxWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Checkbox = ({ label, labelPlacement = 'end', ...props }: Props) => {
  return (
    <FormControlLabel
      control={<CheckboxMUI
        {...props}
      />}
      label={label}
      labelPlacement={labelPlacement}
    />
  )
};

export default Checkbox;