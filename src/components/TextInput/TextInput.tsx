"use client";

import { forwardRef, useRef } from "react";
import { TextInputProps } from "./types";
import classNames from "classnames";
import { InputFieldContainer } from "../InputFieldContainer";

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, animated, hidden, styles, ...inputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement>();

    return (
      <InputFieldContainer
        label={label}
        styles={styles}
        animated={animated}
        hidden={hidden}
      >
        <input
          ref={(node) => {
            inputRef.current = node as HTMLInputElement;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref !== null) {
              ref.current = node;
            }
          }}
          className={classNames(
            "border-gray-300 border-[1px] rounded-md p-2 focus:border-blue-950",
            styles?.input
          )}
          {...inputProps}
        />
      </InputFieldContainer>
    );
  }
);

TextInput.displayName = "TextInput";
