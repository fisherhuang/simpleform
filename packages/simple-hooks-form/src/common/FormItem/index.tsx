import React, { useContext } from "react";
import { IFormItemProps } from "../form";
import { Controller, useFormContext } from "react-hook-form";
import { FormItemFields } from "./formList";
import { formAppContext } from "../formContext";

const FormItem = (
  props: IFormItemProps & {
    type?: string;
    children?: React.ReactNode;
    formItems?: IFormItemProps[];
  }
) => {
  const {
    type,
    children = null,
    formControlProps = null,
    formItemProps,
    ...restProps
  } = props;

  const { control, ...restContextProps } = useFormContext();

  // console.log("--controller", restProps, "--restProps");
  const { itemLayout, size: GlobalSize } = useContext(formAppContext);

  let ItemLayout = props.itemLayout || itemLayout;

  switch (type) {
    case "list":
      return (
        <FormItemFields
          formItemProps={formItemProps}
          {...restProps}
        ></FormItemFields>
      );
    default:
      const ControlComp = props.as || props.type || "input";

      return (
        <Controller
          control={control}
          render={({
            field: { onChange, value, ...restProps },
            fieldState,
            formState,
          }) => {
            let itemProps = {};

            if (ItemLayout) {
              itemProps = {
                label: props.formItemProps.label,
                fieldState: fieldState,
              };
            } else {
              //@ts-ignore
              ItemLayout = React.Fragment;
            }

            const { errors } = formState;

            const _name = formItemProps.name.split(".");
            let _error = null;

            if (Object.keys(errors).length > 0) {
              if (_name.length > 1) {
                let _errorInfo: any = errors;
                _name.forEach((item) => {
                  _errorInfo =
                    _errorInfo?.[isNaN(parseInt(item)) ? item : parseInt(item)];
                });
                _error = _errorInfo;
              } else {
                _error = errors[formItemProps.name];
              }
            }

            return (
              //@ts-ignore
              <ItemLayout {...itemProps}>
                <ControlComp
                  onChange={onChange}
                  placeholder={props.formItemProps.label}
                  aira-invalid={(!!_error).toString()}
                  value={value}
                  {...formControlProps}
                  size={formControlProps?.size || GlobalSize}
                />
                {_error && <>{_error?.message}</>}
              </ItemLayout>
            );
          }}
          {...formItemProps}
        />
      );
  }
};

FormItem.displayName = "FormItem";

export default FormItem;
