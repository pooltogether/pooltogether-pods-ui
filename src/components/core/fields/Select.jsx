import React from "react";
import ReactSelect from "react-select";
import { Controller } from "react-hook-form";

export const Select = (props) => {
  const {
    control,
    options,
    name,
    placeholder,
    rules,
    defaultValue,
    styles,
    components,
  } = props;
  return (
    <Controller
      name={name}
      as={ReactSelect}
      options={options}
      control={control}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rules={rules}
      components={components}
      styles={
        styles || {
          control: (styles) => ({ flex: 1, marginTop: 10, ...styles }),
        }
      }
    />
  );
};

Select.defaultProps = {
  name: "select",
  options: [],
  placeholder: "Select",
  rules: { required: true },
  defaultValue: null,
};
