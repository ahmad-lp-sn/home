import { PropsWithChildren } from "react";
import { InputFieldContainerProps } from "./types";
import classNames from "classnames";

export const InputFieldContainer = ({
  label,
  styles,
  animated,
  hidden,
  children,
}: PropsWithChildren<InputFieldContainerProps>) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-1 w-full",
        animated && "transition-all duration-500",
        hidden && (animated ? "size-0 scale-0" : "hidden"),
        styles?.root
      )}
    >
      <label className={classNames("text-xs font-bold", styles?.label)}>
        {label}
      </label>
      {children}
    </div>
  );
};
