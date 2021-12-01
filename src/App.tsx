import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Checkbox from './components/Checkbox';
import MultipleCheckbox from './components/MultipleCheckbox';

import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@mui/material';
import { css, cx } from '@emotion/css'

const Container = styled.div`
  padding: 10%;
`

const FieldWrapper = styled.div`
  margin-bottom: 20px;
`

//text, checkbox single/multiple, radio, select

const config = [



  // {
  //   "type": "radio",
  //   "key": "radio_field",
  //   "label": "Patient is sick?",
  //   "required": true,
  //   "options": [{
  //     "label": "Yes",
  //     "value": true
  //   },
  //   {
  //     "label": "No",
  //     "value": false
  //   }]
  // },
  // {
  //   "label": "How would you like to be contacted?",
  //   "key": "select_field",
  //   "type": "select",
  //   "options": [{
  //     "label": "SMS",
  //     "value": "sms"
  //   },
  //   {
  //     "label": "Email",
  //     "value": "email"
  //   }]
  // }
  {
    "type": "text",
    "key": "text_field",
    "label": "Name",
    "required": true
  },
  {
    "type": "checkbox_single",
    "key": "checkbox_single_field",
    "label": "Patient is an adult?"
  },
  {
    "type": "checkbox_multiple",
    "key": "checkbox_multiple_field",
    "label": "Which doctor would you like to visit?",
    "options": [{
      "label": "Cardiologist",
      "value": "cardiologist"
    },
    {
      "label": "Dermatologist",
      "value": "dermatologist"
    }]
  },
  {
    "type": "radio",
    "key": "radio_field",
    "label": "Patient is sick?",
    "required": true,
    "options": [{
      "label": "Yes",
      "value": true
    },
    {
      "label": "No",
      "value": false
    }]
  },
]

type FieldKeys = 'text_field' | 'checkbox_single_field' | 'checkbox_multiple_field' | 'radio_field';

enum FieldComponentEnum {
  TEXT = 'text',
  CHECKBOX_SINGLE = 'checkbox_single',
  MULTIPLE_CHECKBOX = 'checkbox_multiple',
  RADIO = 'radio',
}
const FormGR = ({ name, error, options, label, onChange }: {
  name: string, error: boolean, options: Array<{ label: string, value: boolean }>, label: string, onChange: any
}) => {
  console.log('error', error)
  const errorStyle = error ? {color: '#d32f2f'} : {};

  return (
    <>
      <Typography>
        {label}
      </Typography>
      <RadioGroup row name={name} defaultValue={undefined} onChange={onChange}>
        {options.map((option, index) => {
          return <FormControlLabel className={css(errorStyle)} name={name} value={option.value} label={option.label} control={
            <Radio sx={errorStyle}/>
          } />
        })}
      </RadioGroup>
    </>

  )
}

const FieldTypes = new Map<FieldComponentEnum, any>([
  [FieldComponentEnum.TEXT, TextField],
  [FieldComponentEnum.CHECKBOX_SINGLE, Checkbox],
  [FieldComponentEnum.MULTIPLE_CHECKBOX, MultipleCheckbox],
  [FieldComponentEnum.RADIO, FormGR]
]);


const validationSchema = yup.object().shape({
  text_field: yup.string()
    .required(),
  checkbox_single_field: yup.boolean(),
  checkbox_multiple_field: yup.array().of(yup.string()),
  radio_field: yup.boolean().required(),
});

function App() {
  const formik = useFormik({
    initialValues: {
      text_field: '',
      checkbox_single_field: false,
      checkbox_multiple_field: [],
      radio_field: undefined
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        {config.map((field) => {
          const Component = FieldTypes.get(field.type as FieldComponentEnum)
          const key = field.key as FieldKeys;

          return <FieldWrapper>
            <Component
              fullWidth
              key={field.key}
              name={field.key}
              label={field.label}
              options={field.options}
              value={formik.values[key]}
              error={formik.touched[key] && Boolean(formik.errors[key])}
              onChange={formik.handleChange}
            />
          </FieldWrapper>
        })}
        {/* <FieldWrapper>
          <TextField
            fullWidth
            // id="email"
            // name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FieldWrapper> */}

        {/* <FieldWrapper>
          <Checkbox
            labelPlacement
            name="checkbox_multiple_field"
            value={}
            label="Password"
            onChange={formik.handleChange}
          />
        </FieldWrapper> */}

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default App;
