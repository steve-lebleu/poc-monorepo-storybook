import * as React from "react";
import { Button as JoyButton } from "@mui/joy";

export type ButtonProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof JoyButton>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (<JoyButton {...props}>{children}</JoyButton>)
};
