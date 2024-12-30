import { ButtonHTMLAttributes, ReactNode } from "react";

export enum EButtonSize {
  medium = "medium",
  big = "big",
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: EButtonSize;
}
