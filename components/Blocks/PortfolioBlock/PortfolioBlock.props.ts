import {ReactNode, Ref} from "react";

export interface PortfolioProps{
  portfolioRef:Ref<HTMLDivElement>
}
export interface TechnologyProps{
  duration:number
  children: ReactNode;
}
