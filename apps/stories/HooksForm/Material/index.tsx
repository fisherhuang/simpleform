import React from "react";
import { NormalForm } from "../../../../packages/simple-hooks-form/src";
import { Box, Button, Grid2, Input, Stack } from "@mui/material";
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
    formRef.current.submitForm();
  };

  const onSubmit = (data: any) => {
    console.log(data, "-data");
  };

  return (
    <Box sx={{ width: "100%" }} >
      <Stack spacing={2} direction="column">
        <NormalForm
          size="small"
          ref={formRef}
          formItems={formItems}
          onSubmit={onSubmit}
          containerLayout={containerLayout}
          itemLayout={itemLayout}
          formOptions={{
            resolver: zodResolver(formSchema),
            defaultValues: { hobbies: [{}, {}] },
          }}
        ></NormalForm>
        <Button variant="contained" type="button" onClick={() => submit()}>
          提交
        </Button>
      </Stack>
    </Box>
  );
};

export default CustomNormalForm;
