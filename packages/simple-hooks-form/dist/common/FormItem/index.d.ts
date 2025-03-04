import React from "react";
import { IFormItemProps } from "../form";
declare const FormItem: {
    (props: IFormItemProps<any> & {
        type?: string | undefined;
        children?: React.ReactNode;
        formItems?: IFormItemProps<any>[] | undefined;
    }): React.JSX.Element;
    displayName: string;
};
export default FormItem;
