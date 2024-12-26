import { RefObject } from "react";
import { InputProps } from "../libs/types";

export default function Input({
  isTextArea,
  label,
  ref,
  ...props
}: InputProps) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref as RefObject<HTMLTextAreaElement>} className={classes} {...props} />
      ) : (
        <input ref={ref as RefObject<HTMLInputElement>} className={classes} {...props} />
      )}
    </p>
  );
}
