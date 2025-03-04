import React, {
  forwardRef,
  JSX,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
} from "react";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  RegisterOptions,
  UseFormProps,
  SubmitErrorHandler,
  Form,
  FormProvider,
} from "react-hook-form";

import CustomErrorboundary from "./ErrorBoundary";
import FormItem from "./FormItem";
import { FormAppProvider } from "./formContext";

export interface IFormInternalItemProps {
  name: string;
  label?: React.ReactNode;
  rules?: RegisterOptions;
  extra?: React.ReactNode;
  render?: (props: any) => JSX.Element;
}

export interface IFormListItemProps extends IFormItemProps {
  containerLayout?: (props: any) => React.JSX.Element;
}

export interface IFormItemProps<T = any> {
  type?: string;
  as?: (props: any) => JSX.Element | React.ReactNode;
  formItemProps: IFormInternalItemProps;
  formControlProps?: T;
  formItemId?: string | number;
  chidren?: React.ReactNode;
  formItems?: IFormItemProps[];
  itemLayout?: (props: any) => React.JSX.Element;
  hidden?: (watchField: any) => boolean;
  dependencies?: string[];
  size?: "small" | "middle" | "large";
}

export type IFormProps = {
  formItems: (IFormItemProps & IFormListItemProps)[];
  onSubmit?: SubmitHandler<any>;
  onError?: SubmitErrorHandler<any>;
  formOptions?: UseFormProps;
  onCancel?: () => void;
  itemLayout?: any;
  containerLayout?: any;
  size?: "small" | "middle" | "large";
};

export type IFormInstance = UseFormReturn & {
  submitForm: (data?: any) => any;
};

const HooksForm = forwardRef<IFormInstance, IFormProps>(
  (
    {
      formItems = [],
      itemLayout = null,
      containerLayout = null,
      onSubmit = () => {},
      onError = () => {},
      formOptions = {},
      size = "middle",
    }: IFormProps,
    ref
  ) => {
    const formInstance = useForm({ ...formOptions });
    const {
      handleSubmit,
      register,
      control,
      formState: { isValid, errors = {} } = {},
      ...restProps
    } = formInstance;
    console.log("formInstance", formInstance, onError, restProps);
    // const formRef = useRef<HTMLFormElement>({} as HTMLFormElement);

    const submitForm = useCallback(() => {
      return handleSubmit(onSubmit, onError)();
    }, [handleSubmit]);

    useImperativeHandle(
      ref,
      () => ({
        ...formInstance,
        submitForm,
      }),
      []
    );

    const FormItemLayout = itemLayout || React.Fragment;
    const ContainerLayout = containerLayout || React.Fragment;

    useEffect(() => {
      if (!isValid && Object.keys(errors).length > 0) {
        const firstErrorElement = document.querySelector(`[aira-invalid=true]`);
        console.log(isValid, errors, "isValid,errors", firstErrorElement);
        firstErrorElement?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, [isValid, errors]);

    return (
      <FormAppProvider itemLayout={FormItemLayout} size={size}>
        <FormProvider {...formInstance}>
          {/* {restProps.formState.errors && restProps.formState.errors?.[0]} */}
          {/* <form autoComplete="off"> */}
          <ContainerLayout>
            {formItems.map((item: IFormItemProps, index: number) => {
              return (
                <React.Fragment
                  key={item.formItemId || `form-item-${index + 1}`}
                >
                  <FormItem {...item} />
                </React.Fragment>
              );
            })}
          </ContainerLayout>
          {/* </form> */}
        </FormProvider>
      </FormAppProvider>
    );
  }
);

HooksForm.displayName = "hooks form";

export default HooksForm;
