import { FC } from "react";

type Props = {
  extraClass?: string;
  size?: "sm" | "lg";
  value: string;
};

const Button: FC<Props> = ({ extraClass, size = "sm", value }) => (
  <button
    className={`${extraClass} focus:outline-none border border-gray500 ${
      size === "sm" ? "py-1 px-5" : "py-2 px-6"
    } hover:border-gray400 bg-gray500 text-gray100 hover:bg-gray400`}
  >
    {value}
  </button>
);

export default Button;
