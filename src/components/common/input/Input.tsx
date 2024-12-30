import { IInput } from "./input.props.ts";
import styles from "./input.module.css";
import cn from "classnames";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IInput>(function Input(
  { isValid = true, className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(styles["input"], className, {
        [styles["invalid"]]: isValid,
      })}
      {...props}
    />
  );
});

export default Input;
