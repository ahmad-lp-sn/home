import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import { InputFieldContainer } from "../InputFieldContainer";
import { CustumPhoneInputProps } from "./types";
import classNames from "classnames";

export const CustumPhoneInput = ({
  label,
  value,
  animated,
  hidden,
  styles,
  onChange,
}: CustumPhoneInputProps) => {
  return (
    <InputFieldContainer
      label={label}
      styles={styles}
      hidden={hidden}
      animated={animated}
    >
      <PhoneInput
        className="gap-2 justify-start items-center"
        countrySelectorStyleProps={{
          buttonClassName: "!border-0",
          buttonContentWrapperClassName:
            "border-gray-300 border-[1px] p-2 rounded-md focus:border-blue-950",
        }}
        inputProps={{
          className: classNames(
            "border-gray-300 w-full border-[1px] rounded-md p-2 focus:border-blue-950",
            styles?.input
          ),
        }}
        onChange={onChange}
        value={value}
      />
    </InputFieldContainer>
  );
};
