import * as yup from "yup";

import { mapTypesToYup, mapTypesToInitialValues } from "../constants";
import { ConfigOption, InitialValue, YupBaseSchema } from "./interfaces";

export const getValidationSchema = (config: Array<ConfigOption>) => {
  return yup.object().shape(
    config.reduce((prev: YupBaseSchema, curr: ConfigOption) => {
      const validationField = mapTypesToYup.get(curr.type)!;

      if (curr.required) {
        prev[curr.key] = validationField.required();
      } else {
        prev[curr.key] = validationField;
      }

      return prev;
    }, {} as YupBaseSchema)
  );
};

export const getInitialValues = (config: Array<ConfigOption>) => {
  return config.reduce((prev, curr) => {
    prev[curr.key] = mapTypesToInitialValues.get(curr.type);

    return prev;
  }, {} as { [key: string]: InitialValue });
};
