export interface Option<T> {
  label: string,
  value: T,
}

export type FieldKeys = 'text_field' | 'checkbox_single_field' | 'checkbox_multiple_field' | 'radio_field' | 'select_field';

export type ConfigOption = {
  type: string;
  key: string;
  label: string;
  required?: boolean;
  options?: Array<Option<string | boolean>>;
}