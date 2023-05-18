import React from "react";

interface ClassAndStyles {
  Class?: string;
  styles?: object;
}
export interface ButtonProps extends ClassAndStyles {
  content: string | React.ReactElement;
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
  error?: string | null | boolean;
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

export interface WeatherData {
  name: string;
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface PostType {
  id?: string;
  content: string;
  createdAt: string;
  media: string;
  type: "CONTENT_ONLY" | "MEDIA_ONLY" | "MEDIA_WITH_CONTENT_ONLY";
  userName: string;
  userId: string;
}

export interface INotification {
  id: string;
  content: string;
  redirect: string;
  createdAt: string;
  type: string;
}
