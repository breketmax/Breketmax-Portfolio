import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import Image from "next/image";
import { Typography } from "../Typography/Typography";
import logo from './bm.png';
import Arrow from "../ReLink/arrow2.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";
import styles1 from "../../pages/main.module.css";
import { useEffect, useState } from "react";
import Menu from "./menu.svg";
import Close from "./close.svg";

export const Header = ({type,title,href,scrollToBlog,scrollToPortfolio,scrollToAboutMe}:HeaderProps):JSX.Element =>{
  const [navbarDisplay, setNavbarDisplay] = useState(true);
  const [windowWidth,setWindowWidth] = useState(0);
  const navbarToggle = ()=>{
    setNavbarDisplay(!navbarDisplay);
  };
  const navbarClose = ()=>{
    if(windowWidth < 479){
      setNavbarDisplay(true);
    }
  };
  useEffect(()=>{
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 479){
      setNavbarDisplay(true);      
    }
    else{
      setNavbarDisplay(false);
    }
  },[]);
  const variants = {
    open: { opacity: 1, x: 0,y:0 },
    closed: { opacity: 0, x: "10%", y:"-10%" },
  };
   
  if(type === "main"){
  return  (
    <div className={cn(styles.main_header, styles1.container)}>
      <div className={styles.main_header_content}>
        <Image src={logo} width="140px" height="40px"/>
        <motion.div className={styles.nav_icon} onClick={navbarToggle} whileTap={{scale:0.9}}>
          {navbarDisplay ? <Menu /> : <Close />} 
        </motion.div>
        <motion.div className={cn(styles.navbar,{
          [styles.hidden]:navbarDisplay
        })}  animate={!navbarDisplay ? "open":"closed"} variants={variants}>
          <motion.a whileTap={{scale:1.05}} href="#about-me" onClick={() => {scrollToAboutMe? scrollToAboutMe(): null ; navbarClose();}}><Typography tag="h3" color="black">Обо мне</Typography></motion.a>
          <motion.a whileTap={{scale:1.05}} href="#portfolio" onClick={() => {scrollToPortfolio? scrollToPortfolio(): null ; navbarClose();}}><Typography tag="h3" color="black">Портфолио</Typography></motion.a>
          <motion.a whileTap={{scale:1.05}} href="#blog" onClick={() => {scrollToBlog? scrollToBlog(): null ; navbarClose();}}><Typography tag="h3" color="black">Блог</Typography></motion.a>
        </motion.div>
      </div>
    </div>
  );
  }
  else {
   return(
    <div className={cn(styles.additional_header, styles1.container)}>
      <div className={styles.additional_header_content}>
        <Image src={logo} width="140px" height="40px"/>
        <Typography tag="h2">{title}</Typography>
        <div></div>
        <motion.div className={styles.back_link} whileTap={{scale:1.05}}>
          <Link href={`/`+ href}>
            <a>
              <Arrow className="arrow"/> 
              <Typography tag="h3" color="black">Вернуться</Typography>
            </a>
          </Link>
        </motion.div>
      </div>
      
    </div>
   );
  }
  
};