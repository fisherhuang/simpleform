import React from "react";
import { FormLabel, Input, InputProps, Select } from "@mui/material";
import { IFormItemProps } from "../../../../../packages/simple-hooks-form/src/common/form";
import { FormGrid } from "../../Material/layout";

export const BaseFormItems: IFormItemProps[] = [
  {
    as: Input,
    formItemProps: {
      name: "useNmae",
      label: "用户名",
    },
  },
  {
    as: Input,
    formItemProps: {
      name: "password",
      label: "密码",
    },
    formControlProps: {
      type: "password",
    } as InputProps,
  },
  {
    as: Select,
    formItemProps: {
      name: "sex",
      label: "性别",
    },
    formControlProps: {
      options: [
        {
          name: "男",
          value: "male",
        },
        {
          name: "女",
          value: "female",
        },
      ],
    },
  },
  {
    type: "list",
    itemLayout: ({ children, formItemProps }) => {
      return (
        <FormGrid container spacing={2} size={{ xs: 12, xl: 6 }}>
          <FormLabel>{formItemProps.label}</FormLabel>
          <div style={{ padding: 20, boxSizing: "border-box", width: "100%" }}>
            {children}
          </div>
        </FormGrid>
      );
    },
    formItemProps: {
      name: "hobbies",
      label: "爱好",
    },
    formItems: [
      {
        as: Input,
        formItemProps: {
          name: "hobby",
          label: "爱好",
        },
      },
      {
        as: Select,
        formItemProps: {
          name: "desc",
          label: "描述",
        },
      },
    ],
  },
];
