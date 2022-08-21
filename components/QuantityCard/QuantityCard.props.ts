import { ReactNode } from "react";
import work from "./work.svg";
import honest from "./honest.svg";
import education from "./education.svg";

export const icons = {
  work,
  honest,
  education
};

export type IconName = keyof typeof icons;
export  interface QuantityCardProps{
  icon:IconName;
  children: ReactNode;
}

