import { ReactNode } from "react";

export  interface TypographyProps{
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "number" | "title";
  children: ReactNode;
  size?:"m"|"sm";
  color?:"white" | "black";
}

