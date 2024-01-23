import classNames from "classnames";
import { InputFieldContainer } from "../InputFieldContainer";
import { RadioGroupProps } from "./types";

export const RadioGroup = ({
  label,
  name,
  choices,
  value,
  animated,
  hidden,
  styles,
  onChange,
}: RadioGroupProps) => {
  return (
    <InputFieldContainer
      label={label}
      styles={styles}
      animated={animated}
      hidden={hidden}
    >
      {choices.map((item, index) => (
        <div
          key={`choices_${index}`}
          className={classNames(
            "flex gap-2",
            styles?.item?.root,
            item.styles?.root
          )}
        >
          <input
            type="radio"
            id={`choices_${index}`}
            name={name}
            value={item.value}
            checked={index === value}
            onChange={() => onChange?.(item)}
          />
          <label
            className={classNames(styles?.item?.label, item.styles?.label)}
          >
            {item.label}
          </label>
        </div>
      ))}
    </InputFieldContainer>
  );
};
