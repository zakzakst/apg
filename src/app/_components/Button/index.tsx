// https://www.w3.org/WAI/ARIA/apg/patterns/button/

import classNames from "classnames";

// TODO:
// - ボタンが押されている状態の時に、aria-pressed属性を追加する
// - ボタンが無効な状態の時に、aria-disabled属性を追加する
// - aria-haspopup属性を追加する

type Props = {
  children: React.ReactNode;
  pressed?: boolean;
  disabled?: boolean;
  haspopup?: boolean;
  className?: string;
};

const Button = ({
  children,
  pressed = false,
  disabled = false,
  haspopup = false,
  className,
}: Props) => {
  return (
    <button
      aria-pressed={pressed}
      aria-disabled={disabled}
      aria-haspopup={haspopup}
      className={classNames(className)}
    >
      {children}
    </button>
  );
};

export default Button;
