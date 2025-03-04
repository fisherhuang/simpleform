import React from "react";
import NormalForm from "../../../../packages/simple-hooks-form/src/common/form";
import { IFormInstance } from "../../../../packages/simple-hooks-form/src/common/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Row, Col } from "antd";
import { BaseFormItems } from "./base";
import zod from "zod";
import { baseResolver } from "./base";

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

const CustomNormalForm = ({
  formItems,
  itemLayout,
  containerLayout,
  formOptions,
}) => {
  const formRef = React.useRef<IFormInstance>({} as IFormInstance);

  const submit = () => {
    console.log(formRef.current, "-formRef", formRef.current.submitForm());
  };

  const onSubmit = (data: any) => {
    console.log(data, "-data");
  };

  const onError = (error: any) => {
    console.log(error, "-error");
  };

  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <NormalForm
            ref={formRef}
            formItems={formItems}
            onSubmit={onSubmit}
            onError={onError}
            containerLayout={containerLayout}
            itemLayout={itemLayout}
            formOptions={formOptions}
          ></NormalForm>
        </Col>
        <Col span={24}>
          <Button block type="primary" onClick={() => submit()}>
            提交
          </Button>
        </Col>
      </Row>
    </>
  );
};

export const AntdNormalForm = {
  title: "Antd/NormalForm",
  args: {
    formSchema: normalFormZod,
    formItems: BaseFormItems,
    formOptions: {
      resolver: zodResolver(baseResolver),
      defaultValues: {
        hobbies: Array.from(new Array(10)).map((item, index) => ({
          id: index,
        })),
      },
    },
    containerLayout: ({ children }) => {
      return (
        <div
          style={{
            gap: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      );
    },
    itemLayout: ({ children, label }) => {
      return (
        <Row gutter={[8, 8]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
          >
            <label>{label}</label>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 16 }}
            lg={{ span: 18 }}
          >
            {children}
          </Col>
        </Row>
      );
    },
  },
};

export default CustomNormalForm;
