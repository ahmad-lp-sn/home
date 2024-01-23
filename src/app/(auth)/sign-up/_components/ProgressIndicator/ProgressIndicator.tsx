"use client"

import { useSearchParams } from "next/navigation";
import { ProgressIndicatorProps } from "./types";
import classNames from "classnames";

export const ProgressIndicator = ({ total = 3 }: ProgressIndicatorProps) => {
  const searchParams = useSearchParams();
  const currentStep = +(searchParams?.get("step") || 0);

  const stepLen = 100 / total;
  const progress = currentStep * stepLen;
  const animated = total !== currentStep;

  return (
    <div className="justify-start h-2 w-full absolute right-0 left-0 top-0">
      <div
        className={classNames(
          "bg-amber-300 h-full transition-all duration-500",
          animated && "animate-pulse"
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
