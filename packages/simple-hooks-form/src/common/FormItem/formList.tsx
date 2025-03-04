import React, { useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IFormListItemProps } from "../form";
import FormItem from ".";
import { formAppContext } from "../formContext";

export const FormItemFields = (props: IFormListItemProps) => {
  const { formItems = [], containerLayout, ...restListProps } = props;
  const {
    control,
    watch,
    formState: { errors },
    ...restFormContext
  } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: restListProps.formItemProps.name,
      control,
    }
  );

  console.log(restFormContext, "restFormContext");

  const { itemLayout, size: GlobalSize } = useContext(formAppContext);

  const ItemLayout = props.itemLayout || itemLayout;

  const watchField = restListProps.dependencies
    ? watch(restListProps.dependencies)
    : null;

  // console.log(watchField, "--watchField");

  if (props?.hidden?.(watchField)) {
    return null;
  }

  let _restListProps = {};
  let ContainerLayout:
    | ((props: any) => React.JSX.Element)
    | React.ExoticComponent<any>
    | null = null;

  if (!!containerLayout) {
    _restListProps = {
      ...restListProps,
    };
    ContainerLayout = containerLayout;
  } else {
    ContainerLayout = React.Fragment;
  }

  const _error = errors?.[restListProps.formItemProps.name]?.root;
  return (
    <ContainerLayout {..._restListProps}>
      {/* //@ts-ignore */}
      {_error && <div>{_error.message as React.ReactNode}</div>}
      {fields.map((field, index: number) => {
        return (
          <React.Fragment key={field.id}>
            {formItems.map((item, itemIndex: number) => {
              const {
                formItemProps,
                itemLayout = ItemLayout,
                ...restItemProps
              } = item;

              const { name, ...restProps } = formItemProps;

              return (
                <FormItem
                  key={`${field.id}-${itemIndex}`}
                  itemLayout={itemLayout}
                  formItemProps={{
                    ...restProps,
                    name: `${restListProps.formItemProps.name}.${index}.${name}`,
                  }}
                  {...restItemProps}
                />
              );
            })}
          </React.Fragment>
        );
      })}
      <button type="button" onClick={() => append({})}>
        add
      </button>
    </ContainerLayout>
  );
};
