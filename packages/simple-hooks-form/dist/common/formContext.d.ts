import React from "react";
export declare const formAppContext: React.Context<IFormAppContextProp>;
export declare const FormAppProvider: React.FC<IFormAppContextProp & {
    children: React.ReactNode;
}>;
export type IFormAppContextProp = {
    itemLayout?: (props: any) => React.JSX.Element;
    containerLayout?: (props: any) => React.JSX.Element;
    size?: "small" | "middle" | "large";
};
