import { InfoProps } from "./types";

export const Info = ({ label, value }: InfoProps) => {
  return (
    <div className="flex gap-2">
      <div className="font-bold">{label}</div>
      <div>{value}</div>
    </div>
  );
};
