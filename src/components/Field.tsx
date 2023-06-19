import { InputHTMLAttributes, FC } from "react";

import { UseFieldResult } from "@/hooks/useField";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fieldProps: UseFieldResult;
}

const Field = ({ label, fieldProps, ...rest }: FieldProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...fieldProps} {...rest} />
      </label>
      {fieldProps.error && <span>{fieldProps.error}</span>}
    </div>
  );
};

export { Field };
