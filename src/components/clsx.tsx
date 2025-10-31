import clsx from "clsx";
import css from "../css/clsx.module.css";

interface AlertProps {
  type?: "success" | "error";
}

export default function AlertClsx({ type }: AlertProps) {
  return (
    <p className={clsx(css.aletr, type && css[type])}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  );
}
