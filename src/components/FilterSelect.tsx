const FilterSelect = ({
  id,
  name,
  options,
  label,
  defaultValue = "",
  onChange,
  value,
}: {
  id: string;
  name: string;
  options: { value: string; label: string }[];
  label: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}) => (
  <div className="flex flex-col gap-1 w-full sm:w-[200px]">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <select
      id={id}
      name={name}
      // defaultValue={defaultValue}
      className="w-full bg-gray-100 px-4 py-2 rounded-full text-sm outline-none transition-all focus:ring-2 focus:ring-primary-500 hover:bg-gray-50"
      onChange={onChange}
      value={value}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default FilterSelect;
