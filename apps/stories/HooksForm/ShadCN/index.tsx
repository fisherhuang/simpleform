import React from "react";
import { NormalForm } from "../../../../packages/simple-hooks-form/src";
import { Button, Grid2, Input } from "@mui/material";
import { IFormInstance } from "../../../../packages/simple-hooks-form/src/common/form";
import { zodResolver } from "@hookform/resolvers/zod";

const CustomNormalForm = ({
  formItems,
  itemLayout,
  containerLayout,
  formSchema,
}) => {
  const formRef = React.useRef<IFormInstance>({} as IFormInstance);

  const submit = () => {
    console.log(formRef.current, "-formRef", formRef.current.submitForm());
  };

  const onSubmit = (data: any) => {
    console.log(data, "-data");
  };

  return (
    <Grid2 container columns={1} spacing={2}>
      <NormalForm
        ref={formRef}
        formItems={formItems}
        onSubmit={onSubmit}
        containerLayout={containerLayout}
        itemLayout={itemLayout}
        formOptions={{
          resolver: zodResolver(formSchema),
        }}
      ></NormalForm>
      <Button variant="contained" type="button" onClick={() => submit()}>
        提交
      </Button>
    </Grid2>
  );
};

export default CustomNormalForm;
