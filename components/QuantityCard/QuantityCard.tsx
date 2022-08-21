import { icons, QuantityCardProps } from "./QuantityCard.props";
import styles from "./QuantityCard.module.css";
import { Typography } from "../Typography/Typography";
import { motion } from "framer-motion";

export const QuantityCard = ({children,icon}:QuantityCardProps):JSX.Element =>{
  const Icon = icons[icon];
  return  (
    <motion.div className={styles.quantity_card}  initial={{ opacity: 0,x:0,y:40 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} whileHover={{scale:1.1}} viewport={{ once: true }}>
      <Icon/>
      <Typography tag="h2">
        {children}
      </Typography>
    </motion.div>
  );
  
};