import React from "react";

export interface ButtonProps {
  Class?: string;
  styles?: object;
  content: string;
  isDisable?: boolean;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ripple?: boolean;
}
