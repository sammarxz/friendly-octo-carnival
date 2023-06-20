type TextFieldProps = {
  label: string;
  onChange: (value: boolean) => void;
};

const Checkbox = ({ label, onChange }: TextFieldProps) => {
  return (
    <div className="flex gap-s3 font-body text-t3 text-neutral-900">
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          className="bg-white text-neutral-400 accent-primary-500 focus:outline-none"
          value="checked"
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export { Checkbox };
