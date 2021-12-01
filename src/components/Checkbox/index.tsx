import React from 'react';
import { jsx } from '@emotion/react'
import CheckboxMUI, { CheckboxProps } from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

type Props = { label: string } & CheckboxProps;

const CheckboxWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Checkbox = ({label, ...props}: Props) => {
  return (
    <CheckboxWrapper>
      <Typography>
        {label}
      </Typography>
      <CheckboxMUI {...props} />
    </CheckboxWrapper>
  )
};

export default Checkbox;