import React, { useImperativeHandle, useRef } from "react";
import HooksForm, { IFormInstance, IFormProps } from "../../common/form";

const NormalForm = React.forwardRef<IFormInstance, IFormProps>((props, ref) => {
  const formRef = useRef<IFormInstance>({} as IFormInstance);

  useImperativeHandle(ref, () => formRef.current, []);

  return (
    <>
      <HooksForm ref={formRef} {...props} />
    </>
  );
});

export default NormalForm;
