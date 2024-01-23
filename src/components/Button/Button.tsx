import { PropsWithChildren } from "react";
import { ButtonProps } from "./types";
import classNames from "classnames";
import { styles } from "./styles";

export const Button = ({
  children,
  variant = "contained",
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(
        "flex justify-center p-1 border-[2px] border-blue-950 disabled:opacity-25",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
