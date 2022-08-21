import { TypographyProps } from "./Typography.props";
import styles from "./Typography.module.css";
import cn from "classnames";
import { motion } from "framer-motion";

export const Typography = ({tag,children,size,color}:TypographyProps):JSX.Element =>{
  switch (tag){
    case "h1": return <motion.h1   initial={{ opacity: 0,x:10,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.3}} viewport={{ once: true }} className={styles.h1}>{children}</motion.h1>;
    case "h2": return <motion.h2   initial={{ opacity: 0,x:-10,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.4}} viewport={{ once: true }} className={styles.h2}>{children}</motion.h2>;
    case "h3": return <motion.h3   initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.4}} viewport={{ once: true }} className={color === "black" ? cn(styles.h3, styles.black) :cn(styles.h3, styles.white) }>{children}</motion.h3>;
    case "h4": return <motion.h4   initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.4}} viewport={{ once: true }} className={styles.h4}>{children}</motion.h4>;
    case "h5": return <motion.h5   initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.4}} viewport={{ once: true }} className={styles.h5}>{children}</motion.h5>;
    case "p": return <motion.p   initial={{ opacity: 0,x:0,y:10  }} whileInView={{ opacity: 1,x:0,y:0  }} transition={{duration:0.5}} viewport={{ once: true }} className={size === "m" ? styles.p_m : styles.p_sm }>{children}</motion.p>;
    case "number": return <motion.p   initial={{ opacity: 0,x:0,y:-10 }} whileInView={{ opacity: 1,x:0,y:0  }} transition={{duration:0.4}} viewport={{ once: true }} className={size === "m" ? styles.number_m : styles.number_sm }>{children}</motion.p>;
    case "title": return <motion.p   initial={{ opacity: 0,x:-10,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }} className={styles.title }>{children}</motion.p>;
    default: return <></>;
  }
};