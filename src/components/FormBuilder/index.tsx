import React, { useMemo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

import { ConfigOption, FieldKeys } from "../../common/interfaces";
import { initialValues, typesMapToYup } from "../../constants";
import Checkbox from "../Checkbox";
import MultipleCheckbox from "../MultipleCheckbox";
import RadioGroup from "../RadioGroup";
import Select from "../Select";
import { FieldWrapper } from "./styled";

enum FieldComponentsEnum {
  TEXT = "text",
  CHECKBOX_SINGLE = "checkbox_single",
  MULTIPLE_CHECKBOX = "checkbox_multiple",
  RADIO = "radio",
  SELECT = "select",
}

const FieldComponents = new Map<FieldComponentsEnum, any>([
  [FieldComponentsEnum.TEXT, TextField],
  [FieldComponentsEnum.CHECKBOX_SINGLE, Checkbox],
  [FieldComponentsEnum.MULTIPLE_CHECKBOX, MultipleCheckbox],
  [FieldComponentsEnum.RADIO, RadioGroup],
  [FieldComponentsEnum.SELECT, Select],
]);

type Config = Array<ConfigOption>;

interface Props {
  config: Config;
}

const getValidationSchema = (config: Array<ConfigOption>) => {
  return yup.object().shape(
    config.reduce(
      (prev: { [key: string]: yup.BaseSchema }, curr: ConfigOption) => {
        const validationField = typesMapToYup.get(curr.key)!;

        if (curr.required) {
          prev[curr.key] = validationField.required();
        } else {
          prev[curr.key] = validationField;
        }

        return prev;
      },
      {} as { [key: string]: yup.BaseSchema }
    )
  );
};

const FormBuilder = ({ config }: Props) => {
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
      {config.map((field) => {
        const Component = FieldComponents.get(
          field.type as FieldComponentsEnum
        );
        const key = field.key as FieldKeys;

        return (
          <FieldWrapper key={field.key}>
            <Component
              fullWidth
              name={field.key}
              label={field.label}
              options={field.options}
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
