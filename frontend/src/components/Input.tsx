import { useState } from "react";
import { getNames } from "country-list";

const countries = getNames();

type FormData = {
  myCountry: string;
  yourCountry: string;
};

interface InputProps {
  placeholder: string;
  name: keyof FormData;
  setValue: (name: keyof FormData, value: string) => void;
}

const Input: React.FC<InputProps> = ({ setValue, name, placeholder }) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setValue(name, value);

    if (value.length > 0) {
      setFiltered(
        countries.filter((c) => c.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (country: string) => {
    setQuery(country);
    setValue(name, country);
    setFiltered([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="outline-none px-4 py-2 border rounded-xl w-full"

      />
      {filtered.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white text-black border rounded-lg max-h-40 overflow-y-auto shadow-md z-10">
          {filtered.map((country, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
