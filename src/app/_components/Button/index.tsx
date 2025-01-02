// https://www.w3.org/WAI/ARIA/apg/patterns/button/

import classNames from "classnames";
// import { button as styles } from "./styles.css";

// TODO:
// - スタイル付ける

type Props = {
  children: React.ReactNode;
  pressed?: boolean;
  disabled?: boolean;
  haspopup?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  pressed = false,
  disabled = false,
  haspopup = false,
  className,
  onClick,
}: Props) => {
  return (
    <button
      aria-pressed={pressed}
      aria-disabled={disabled}
      aria-haspopup={haspopup}
      // className={classNames(className, styles.main)}
      className={classNames(className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
