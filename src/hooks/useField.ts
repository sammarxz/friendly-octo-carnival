import { ChangeEvent, useState } from "react";

type useFieldProps = {
  type: string;
  validate?: (value: string) => string | undefined;
};

type UseFieldResult = {
  type: string;
  value: string;
  error: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
};

const useField = ({ type, validate }: useFieldProps): UseFieldResult => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (validate) {
      const errorMessage = validate(event.target.value)
      setError(errorMessage)
    } else {
      setError(undefined);
    }
  };

  const validateField = () => {
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
      return !errorMessage;
    }
    return true;
  };

  return {
    type,
    value,
    error,
    onChange,
    validate: validateField,
  };
};

export { useField };
export type { UseFieldResult };
