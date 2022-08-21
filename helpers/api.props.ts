import { ImageProps } from "next/image";

export interface APITypes{
  blog:BlogTypes,
  timeline:TimlelineTypes
}

export interface BlogTypes{
  news:NewsTypes[],
  reviews:ReviewsTypes[]
}

export interface TimlelineTypes{
  img:ImageProps,
  data:string,
  title:string,
  text:string
}

export interface NewsTypes{
  id:number,
  time:string,
  title:string,
  text:string
}

export interface ReviewsTypes{
  img:ImageProps,
  review:string
  name:string,
  post:string
}