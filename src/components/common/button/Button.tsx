import styles from "./button.module.css";
import { EButtonSize, IButton } from "./button.props.ts";
import cn from "classnames";

function Button({
  children,
  className,
  size = EButtonSize.medium,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        styles["button"],
        styles["accent"],
        styles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
