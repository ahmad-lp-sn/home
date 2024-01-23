import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputFieldContainerProps, InputFieldContainerStyles } from "../InputFieldContainer";

export type TextInputStyles = {
  input?: string;
} & InputFieldContainerStyles;

export type TextInputProps = InputFieldContainerProps & {
  styles?: TextInputStyles;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
