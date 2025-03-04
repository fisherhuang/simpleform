import React from "react";
import { Card, Col, Divider, Input, Row, Select } from "antd";
import type { InputProps, SelectProps } from "antd";
import {
  IFormItemProps,
  IFormListItemProps,
} from "../../../../../packages/simple-hooks-form/src/common/form";
import Zod from "zod";
import TextArea from "antd/es/input/TextArea";

export const baseResolver = Zod.object({
  userName: Zod.string({
    message: "请输入名称",
  }),
  sex: Zod.string().optional(),
  hobbies: Zod.array(
    Zod.object({
      hobby: Zod.string(),
      desc: Zod.string().optional(),
      test: Zod.array(
        Zod.object({
          desc: Zod.string(),
        })
      ).optional(),
    })
  )
    .min(2, "至少有两条数据")
    .max(4, "不能超过4条数据")
    .optional(),
}).refine((data) => {
  console.log(data, "--data");
  return true;
});

export const BaseFormItems: (IFormItemProps & IFormListItemProps)[] = [
  {
    as: Input,
    formItemProps: {
      name: "userName",
      label: "用户名",
    },
    formControlProps: {
      allowClear: true,
    } as InputProps,
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
          label: "男",
          value: "male",
        },
        {
          label: "女",
          value: "female",
        },
      ],
      style: { width: "100%" },
    },
  },
  {
    type: "list",
    containerLayout: ({ children, ...restProps }) => {
      console.log(restProps, "--restProps");
      return (
        <Card>
          <Card.Meta title={restProps.formItemProps.label}></Card.Meta>
          <Divider />
          <Row gutter={[8, 8]}>{children}</Row>
        </Card>
      );
    },
    itemLayout: ({ children, label, formItemProps }) => {
      return (
        <Col span={24}>
          <Row gutter={16}>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6 }}
            >
              {formItemProps?.label || label}
            </Col>
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 16 }}
              xl={{ span: 18 }}
            >
              {children}
            </Col>
          </Row>
        </Col>
      );
    },
    dependencies: ["sex"],
    hidden: (formData) => {
      return formData?.[0] === "male";
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
        formControlProps: {
          options: [
            {
              label: "篮球",
              value: "basketball",
            },
            {
              label: "足球",
              value: "soccer",
            },
          ],
          style: { width: "100%" },
        },
      },
      {
        type: "list",
        formItemProps: {
          name: "test",
          label: "测试",
        },
        formItems: [
          {
            as: TextArea,
            formItemProps: {
              name: "desc",
              label: "详情描述",
            },
          },
        ],
      },
    ],
  },
];
