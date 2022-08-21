import { LinkProps } from "./ReLink.props";
import styles from "./ReLink.module.css";
import Arrow from "./arrow2.svg";
import Link from "next/link";
import { motion } from "framer-motion";


export const ReLink = ({children,href}:LinkProps):JSX.Element =>{
  return  (
    <motion.div className={styles.linkBlock} whileTap={{scale:1.05}}  initial={{ opacity: 0,x:0,y:20 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.3}} viewport={{ once: true }}>
      <Link href={href}>
        <a  className={styles.link}>{children}{<Arrow />}</a>
      </Link>
      
      
    </motion.div>
  );
  
};