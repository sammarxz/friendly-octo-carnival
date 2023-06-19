import { InputHTMLAttributes } from "react";

import { UseFieldResult } from "@/hooks/useField";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fieldProps: UseFieldResult;
}

const Field = ({ label, fieldProps, ...rest }: FieldProps) => {
  return (
    <div className="text-gray-900">
      <label className="block text-sm font-medium leading-4">
        {label}
        <div className="mt-2">
          <input
            {...fieldProps}
            {...rest}
            className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 
            ring-inset placeholder:text-gray-400  outline-none
            focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 font-normal 
            ${
              fieldProps.error
                ? "ring-primary-500 focus:ring-primary-500"
                : "ring-gray-300 focus:ring-gray-600"
            }`}
          />
        </div>
      </label>
      {fieldProps.error && (
        <span className="text-xs text-primary-400">{fieldProps.error}</span>
      )}
    </div>
  );
};

export { Field };
