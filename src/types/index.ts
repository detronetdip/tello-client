import React from "react";

interface ClassAndStyles {
  Class?: string;
  styles?: object;
}
export interface ButtonProps extends ClassAndStyles {
  content: string;
  isDisable?: boolean;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ripple?: boolean;
}

export interface InputProps extends ClassAndStyles {
  placeholder: string;
  type: string;
  view?: "INPUT" | "TEXTAREA";
  value?: string | number;
  id?: string;
  name?: string;
  error?:string | null;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export interface TooltipProps extends ClassAndStyles {
  info: string;
  position: "LEFT" | "RIGHT" | "TOP" | "BOTTOM";
}
