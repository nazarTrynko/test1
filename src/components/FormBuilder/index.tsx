import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

import { Config } from "../../common/interfaces";
import { FieldWrapper } from "./styled";
import { getInitialValues, getValidationSchema } from "../../common/utils";
import { FieldComponents, FieldComponentsEnum } from "../../constants";

interface Props {
  config: Config;
}

const FormBuilder = ({ config }: Props) => {
  const initialValues = useMemo(() => getInitialValues(config), []);
  const validationSchema = useMemo(() => getValidationSchema(config), []);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {config.map(({ key, label, options, type }) => {
        const Component = FieldComponents.get(type as FieldComponentsEnum);

        return (
          <FieldWrapper key={key}>
            <Component
              fullWidth
              name={key}
              label={label}
              options={options}
              value={formik.values[key]}
              error={formik.touched[key] && Boolean(formik.errors[key])}
              onChange={formik.handleChange}
            />
          </FieldWrapper>
        );
      })}

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormBuilder;
