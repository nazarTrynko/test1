import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from './components/Checkbox';
import * as yup from 'yup';
import { useFormik } from 'formik';
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 32px;
`

const FieldWrapper = styled.div`
  margin: 10px;
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
  // {
  //   "type": "checkbox_multiple",
  //   "key": "checkbox_multiple_field",
  //   "label": "Which doctor would you like to visit?",
  //   "options": [{
  //     "label": "Cardiologist",
  //     "value": "cardiologist"
  //   },
  //   {
  //     "label": "Dermatologist",
  //     "value": "dermatologist"
  //   }]
  // },
]

type FieldKeys = 'text_field' | 'checkbox_single_field';

enum FieldComponentEnum {
  TEXT = 'text',
  CHECK_BOX_SINGLE = 'checkbox_single',
}

const FieldTypes = new Map<FieldComponentEnum, any>([
  [FieldComponentEnum.TEXT, TextField],
  [FieldComponentEnum.CHECK_BOX_SINGLE, Checkbox],
]);

const validationSchema = yup.object().shape({
  text_field: yup.string()
    .required('Name is required'),
  checkbox_single_field: yup.boolean().oneOf([true, false])
  // password: yup.string()
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

function App() {
  const formik = useFormik({
    initialValues: {
      text_field: '',
      checkbox_single_field: false,
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

          return <Component
            fullWidth
            key={field.key}
            name={field.key}
            label={field.label}
            value={formik.values[key]}
            error={formik.touched[key] && Boolean(formik.errors[key])}
            onChange={formik.handleChange}
          />
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
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
