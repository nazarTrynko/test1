import * as yup from "yup";
import { InitialValue } from "./common/interfaces";
import TextField from "@mui/material/TextField";
import Checkbox from "./components/Checkbox";
import MultipleCheckbox from "./components/MultipleCheckbox";
import RadioGroup from "./components/RadioGroup";
import Select from "./components/Select";

export const mapTypesToYup = new Map<string, yup.AnySchema>([
  ["text", yup.string()],
  ["checkbox_single", yup.boolean()],
  ["checkbox_multiple", yup.array().of(yup.string())],
  ["radio", yup.boolean()],
  ["select", yup.string()],
]);

export const mapTypesToInitialValues = new Map<string, InitialValue>([
  ["text", ""],
  ["checkbox_single", false],
  ["checkbox_multiple", []],
  ["radio", undefined],
  ["select", ""],
]);

export enum FieldComponentsEnum {
  TEXT = "text",
  CHECKBOX_SINGLE = "checkbox_single",
  MULTIPLE_CHECKBOX = "checkbox_multiple",
  RADIO = "radio",
  SELECT = "select",
}

export const FieldComponents = new Map<FieldComponentsEnum, any>([
  [FieldComponentsEnum.TEXT, TextField],
  [FieldComponentsEnum.CHECKBOX_SINGLE, Checkbox],
  [FieldComponentsEnum.MULTIPLE_CHECKBOX, MultipleCheckbox],
  [FieldComponentsEnum.RADIO, RadioGroup],
  [FieldComponentsEnum.SELECT, Select],
]);
