import React, { JSX } from "react";
import { SubmitHandler, UseFormReturn, RegisterOptions, UseFormProps, SubmitErrorHandler } from "react-hook-form";
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
declare const HooksForm: React.ForwardRefExoticComponent<IFormProps & React.RefAttributes<IFormInstance>>;
export default HooksForm;
