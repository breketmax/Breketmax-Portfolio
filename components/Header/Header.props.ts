

export  interface HeaderProps{
  type: "main" | "additional",
  title?:string,
  href?:string,
  scrollToBlog?:()=>void,
  scrollToPortfolio?:()=>void,
  scrollToAboutMe?:()=>void
}

