import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "outlined" | "contained";
} & ButtonHTMLAttributes<HTMLButtonElement>;
