import { Typography } from "../../Typography/Typography";
import styles from "./IntroductionBlock.module.css";
import { ReLink } from "../../ReLink/ReLink";
import { motion } from "framer-motion";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";



export const IntroductionBlock = ():JSX.Element => {
  return (
    <motion.div className={cn(styles.introduction_block, styles1.block)}  initial={{ opacity: 0,x:10,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.5}} viewport={{ once: true }}>
      <div className={styles.introduction_block_content}>
        <div className={styles.me}>
          <Typography tag="h1">Максим{<br/>}Щеглов</Typography>
        </div>
        <div className={styles.introduction_description}>
          <Typography tag="title">Введение</Typography>
          <Typography tag="h2">Frontend разработчик родом из Сибири.</Typography>
          <Typography tag="p" size="m">Да-да, его и впрямь зовут Максим и он действительно разрабатывает на React.</Typography>
          <ReLink href="/history">Моя история</ReLink>

        </div>
      </div>
    </motion.div>
  );
};