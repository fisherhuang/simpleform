import React from "react";
import CustomNormalForm from ".";
import zod from "zod";
import {
  BaseFormItems,
  BaseFormItems as MdBaseFormItems,
} from "../config/material/formItems";
import { FormGrid, MainGrid } from "./layout";
import { FormLabel } from "@mui/material";
import { AntdNormalForm } from "../Antd";

export default {
  title: "HooksForm/md/CustomNormalForm",
  component: CustomNormalForm,
  args: {},
  argTypes: {},
  tags: [],
};

const normalFormZod = zod.object({
  name: zod.string({
    required_error: "请输入名称",
  }),
  select: zod
    .string({
      required_error: "请选择",
    })
    .optional(),
});

export const FieldArrays = {};

export const MDNormal = {
  title: "HooksForm/Material/Normal",
  component: CustomNormalForm,
  args: {
    formSchema: normalFormZod,
    formItems: MdBaseFormItems,
    containerLayout: ({ children }) => {
      return (
        <MainGrid container spacing={2} columns={1}>
          {children}
        </MainGrid>
      );
    },
    itemLayout: ({ children, label, ...args }) => {
      console.log(args, "--args", label);
      return (
        <FormGrid container spacing={2} size={{ xs: 12, xl: 6 }}>
          <FormLabel>{label}</FormLabel>
          {children}
        </FormGrid>
      );
    },
  },
};

export const ShadCN = {
  title: "ShadCN/Normal",
  args: {
    formSchema: normalFormZod,
    formItems: BaseFormItems,
    containerLayout: ({ children }) => {
      return (
        <MainGrid container spacing={2} columns={1}>
          {children}
        </MainGrid>
      );
    },
    itemLayout: ({ children, label, ...args }) => {
      console.log(args, "--args");
      return (
        <FormGrid container spacing={2}>
          <FormLabel>{label}</FormLabel>
          {children}
        </FormGrid>
      );
    },
  },
};
