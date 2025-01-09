import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "./input";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label: string;
  error?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function Comp(
  { label, error, ...inputParams },
  ref
) {
  return (
    <div className="flex flex-col gap-2 my-2">
      <label> {label} </label>
      <Input ref={ref} {...inputParams} placeholder={"Ingresa tu " + label} />
      {error && <span className="text-red-500"> {error} </span>}
      <></>
    </div>
  );
});
export default TextField;
