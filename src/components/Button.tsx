import { ReactNode } from "react";
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/getClasses.js";
interface Props {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  type?: string;
}
interface PropsSelect {
  children?: ReactNode;
}

function Button({ children, variant = "primary", type, ...rest }: Props) {
  return (
    <button
      className={getClasses([styles.button, styles[`button--${variant}`]])}
      type={type === "submit" ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, ...rest }: PropsSelect) {
  return (
    <select
      title="select"
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
