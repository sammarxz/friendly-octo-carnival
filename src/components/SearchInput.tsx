import { RiSearchLine } from "react-icons/ri";

type SearchInputProps = {
  label: string;
  placeholder: string;
};

const SearchInput = ({ label, placeholder }: SearchInputProps) => {
  return (
    <>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-800 sr-only"
      >
        {label}
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <RiSearchLine />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 
          ring-inset placeholder:text-gray-400 outline-none
          focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3 font-normal pl-10
          ring-gray-300 focus:ring-gray-600"
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export { SearchInput };
