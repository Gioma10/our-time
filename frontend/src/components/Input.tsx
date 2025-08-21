import { useState } from "react";
import { getNames } from "country-list";
import {
  UseFormRegister,
  UseFormSetValue,
  RegisterOptions,
  FieldError,
} from "react-hook-form";
import { motion } from "motion/react";
import { shakeError } from "../transition/animation";

const countries = getNames();

type FormData = {
  myCountry: string;
  yourCountry: string;
};

interface InputProps {
  placeholder: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  rules?: RegisterOptions<FormData, keyof FormData>;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({
  error,
  placeholder,
  name,
  register,
  setValue,
  rules,
}) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setValue(name, value, { shouldValidate: true });

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
    setValue(name, country, { shouldValidate: true });
    setFiltered([]);
  };

  return (
    <div className="relative">
      <motion.input
        animate={error ? shakeError() : undefined}
        type="text"
        placeholder={placeholder}
        {...register(name, rules)}
        value={query}
        onChange={handleChange}
        className={`outline-none px-4 py-2 rounded-xl w-full ${error ? 'border border-red-600' : 'border'}`}
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
