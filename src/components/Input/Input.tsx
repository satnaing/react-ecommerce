import { FC } from "react";

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  extraClass?: string;
  required?: boolean;
  border?: string;
  id?: string;
};

const Input: FC<Props> = ({
  type = "text",
  name,
  placeholder,
  extraClass,
  required = false,
  border = "",
  id = "",
}) => (
  <input
    type={type}
    className={`${
      border !== "" ? border : "border-2 border-gray500"
    } py-2 px-4 outline-none ${extraClass}`}
    id={id}
    name={name}
    placeholder={placeholder}
    required={required}
  />
);

export default Input;
