const FilterInput = ({
  id,
  name,
  placeholder,
  type = "number",
  onChange,
}: {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col gap-1 w-full sm:w-[200px]">
    <label htmlFor={id} className="sr-only">
      {placeholder}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      min="0"
      className="w-full bg-gray-100 px-4 py-2 rounded-full text-sm outline-none transition-all focus:ring-2 focus:ring-primary-500 hover:bg-gray-50"
      onChange={onChange}
    />
  </div>
);

export default FilterInput;
