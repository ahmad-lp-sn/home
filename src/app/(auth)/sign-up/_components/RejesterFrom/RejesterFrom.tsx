"use client";

import { CustumPhoneInput } from "@/components/CustumPhoneInput";
import { RadioGroup } from "@/components/RadioGroup";
import { TextInput } from "@/components/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRejesterFromSchema } from "./schema";
import { Button } from "@/components/Button";
import { useState } from "react";
import { DataPreview } from "../DataPreview/DataPreview";
import { salaryChoices } from "./constants";

const steps = ["name", "email", "phone", "salary"];

export const RejesterFrom = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const step = +(searchParams?.get("step") || 0);

  const [isPreview, setIsPreview] = useState(false);

  const schema = useRejesterFromSchema();
  const form = useForm({
    shouldFocusError: true,
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    setIsPreview(true);
  };

  if (isPreview) {
    return (
      <DataPreview
        onClose={() => setIsPreview((v) => !v)}
        {...form.getValues()}
      />
    );
  }

  return (
    <form className="flex flex-col p-2" onSubmit={form.handleSubmit(onSubmit)}>
      <TextInput
        {...form.register("name")}
        label="Name"
        placeholder="Name"
        hidden={step !== 0}
        animated
      />
      <TextInput
        {...form.register("email")}
        label="Email"
        placeholder="Email"
        hidden={step !== 1}
        animated
      />
      <CustumPhoneInput
        onChange={(v) => form.setValue("phone", v)}
        value={form.watch("phone")}
        label="Phone Number"
        hidden={step !== 2}
        animated
      />
      <RadioGroup
        label="Salary"
        choices={salaryChoices}
        value={salaryChoices.findIndex((v) => v.label === form.watch("salary"))}
        hidden={step !== 3}
        onChange={(v) => form.setValue("salary", v.label)}
        animated
      />
      <div className="flex flex-col gap-1 md:flex-row-reverse py-2 justify-start w-full">
        {step !== 3 && (
          <Button
            type="button"
            onClick={() => router.push(`${pathname}?step=${step + 1}`)}
            disabled={!form.watch(steps[step])}
          >
            Next
          </Button>
        )}
        {step === 3 && (
          <Button disabled={!form.watch(steps[step])}>Finish</Button>
        )}
        {step !== 0 && (
          <Button
            type="button"
            variant="outlined"
            onClick={() => router.push(`${pathname}?step=${step - 1}`)}
          >
            Previous
          </Button>
        )}
      </div>
    </form>
  );
};
