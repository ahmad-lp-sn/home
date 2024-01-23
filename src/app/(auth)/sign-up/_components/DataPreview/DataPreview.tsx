import { Button } from "@/components/Button";
import { Info } from "./Info";
import { DataPreviewProps } from "./types";

export const DataPreview = ({
  name,
  email,
  phone,
  salary,
  onClose,
}: DataPreviewProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Info label="Name" value={name} />
      <Info label="Email" value={email} />
      <Info label="Phone" value={phone} />
      <Info label="Salary" value={salary} />
      <div className="flex flex-col gap-1 md:flex-row-reverse justify-start w-full text-md">
        <Button>Submit</Button>
        <Button variant="outlined" onClick={onClose}>
          Back
        </Button>
      </div>
    </div>
  );
};
