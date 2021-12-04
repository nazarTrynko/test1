import * as yup from "yup";

export const initialValues = {
  text_field: "",
  checkbox_single_field: false,
  checkbox_multiple_field: [],
  radio_field: undefined,
  select_field: "",
};

export const typesMapToYup = new Map<string, yup.AnySchema>([
  ["text_field", yup.string()],
  ["checkbox_single_field", yup.boolean()],
  ["checkbox_multiple_field", yup.array().of(yup.string())],
  ["radio_field", yup.boolean()],
  ["select_field", yup.string()],
]);
