import {
  InputFieldContainerProps,
  InputFieldContainerStyles,
} from "../InputFieldContainer";

export type CustumPhoneInputStyles = {
  input?: string;
} & InputFieldContainerStyles;

export type CustumPhoneInputProps = InputFieldContainerProps & {
  styles?: CustumPhoneInputStyles;
  onChange?: (val: string) => void;
  value?: string;
};
