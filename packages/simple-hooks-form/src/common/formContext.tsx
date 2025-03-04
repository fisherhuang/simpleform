import React from "react";

export const formAppContext = React.createContext<IFormAppContextProp>(
  {} as IFormAppContextProp
);

export const FormAppProvider: React.FC<
  IFormAppContextProp & {
    children: React.ReactNode;
  }
> = ({ children, ...restProps }) => {
  return (
    <formAppContext.Provider value={{ ...restProps }}>
      {children}
    </formAppContext.Provider>
  );
};

export type IFormAppContextProp = {
  itemLayout?: (props: any) => React.JSX.Element;
  containerLayout?: (props: any) => React.JSX.Element;
  size?: "small" | "middle" | "large";
};
