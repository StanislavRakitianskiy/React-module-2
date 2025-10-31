import clsx from "clsx";
import css from "../css/btn.module.css";

interface ButtonProps {
  variant?: "active" | "dis";
  text: string;
}

export default function ButtonUsual({ variant, text }: ButtonProps) {
  return (
    <button className={clsx(css.btn, variant && css[variant])}>{text}</button>
  );
}
