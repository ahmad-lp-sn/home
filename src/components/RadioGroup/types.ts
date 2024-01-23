import {
  InputFieldContainerProps,
  InputFieldContainerStyles,
} from "../InputFieldContainer";

export type RadioGroupItemStyles = {
  root?: string;
  input?: string;
  label?: string;
};

export type RadioGroupItem = {
  label: string;
  value?: string | number;
  styles?: RadioGroupItemStyles;
};

export type RadioGroupStyles = {
  item?: RadioGroupItemStyles;
} & InputFieldContainerStyles;

export type RadioGroupProps<T extends RadioGroupItem = RadioGroupItem> =
  InputFieldContainerProps & {
    name?: string;
    choices: T[];
    value?: number;
    styles?: RadioGroupStyles;
    onChange?: (item: T) => void;
  };
