"use client";

//Hooks/Packages
import { ErrorMessage, Field } from "formik";
//Types
import { InputProps } from "@/types";

const Input = ({ name, label, disabled, error, type }: InputProps) => {
  return (
    <div className="relative">
      <Field
        id={name}
        name={name}
        placeholder=" "
        disabled={disabled}
        type={type ? type : "text"}
        className={` border-2 peer block rounded-md p-6 pb-1 w-full text-md  text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 disabled:cursor-not-allowed  ${
          error
            ? "border-rose-500 focus:border-rose-500"
            : "focus:border-neutral-300 border-black"
        } `}
      />
      <label
        htmlFor={name}
        className={`absolute top-4 left-6 text-md duration-150 transform   z-10 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 scale-75 -translate-y-3  ${
          error ? "text-rose-500" : "text-zinc-400"
        } `}
      >
        {label}
      </label>
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-sm text-rose-500"
      />
    </div>
  );
};

export default Input;
