import { ChangeEvent, useState } from "react";

type useFieldProps = {
  type: string;
  placeholder?: string;
  validate?: (value: string) => string | undefined;
};

type UseFieldResult = {
  type: string;
  value: string;
  error: string | undefined;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
  isValid: boolean;
};

const useField = ({
  type,
  placeholder,
  validate,
}: useFieldProps): UseFieldResult => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState(true);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (validate) {
      const errorMessage = validate(event.target.value);
      setError(errorMessage);
      setIsValid(!errorMessage);
    }
  };

  const validateField = () => {
    if (validate) {
      const errorMessage = validate(value);
      setError(errorMessage);
      setIsValid(!errorMessage);
      return !errorMessage;
    }
    return true;
  };

  return {
    type,
    value,
    placeholder,
    error,
    onChange,
    validate: validateField,
    isValid,
  };
};

export { useField };
export type { UseFieldResult };
