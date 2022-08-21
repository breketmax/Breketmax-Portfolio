import styles from "./UpButton.module.css";
import Arrow from "../ReLink/arrow2.svg";
import { useEffect, useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";


export const UpButton = () => {
  const [scroll,setScroll] = useState(0);
  const scrollHandle = () => {
    setScroll(window.scrollY);
  };
  useEffect(()=>{
    window.addEventListener("scroll",scrollHandle);
    return () => window.removeEventListener("scroll",scrollHandle);
  },[]);
  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return(
    <motion.div className={cn(styles.up_button,{
      [styles.hide]:scroll<1000
    } )} onClick={scrollToTop} initial={{opacity:0}} animate={scroll > 1000 ? {opacity:1}:{opacity:0}} whileTap={{scale:0.9}}>
      <Arrow/>
    </motion.div>
  );
};