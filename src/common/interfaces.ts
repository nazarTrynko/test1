import * as yup from "yup";

export interface Option<T> {
  label: string,
  value: T,
}

export type ConfigOption = {
  type: string;
  key: string;
  label: string;
  required?: boolean;
  options?: Array<Option<string | boolean>>;
}

export type Config = Array<ConfigOption>;

export type YupBaseSchema = { [key: string]: yup.BaseSchema };

export type InitialValue = string | boolean | [] | undefined;