import { ReactNode } from "react";
import style from "../styles/modules/title.module.scss";
interface Props {
  children?: ReactNode;
}

function PageTitle({ children, ...rest }: Props) {
  return (
    <p className={style.title} {...rest}>
      {children}
    </p>
  );
}

export default PageTitle;
