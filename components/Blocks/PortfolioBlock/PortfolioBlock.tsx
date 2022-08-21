import styles from "./PortfolioBlock.module.css";
import HtmlIcon from "./html.svg";
import CssIcon from "./css.svg";
import JsIcon from "./js.svg";
import TsIcon from "./ts.svg";
import NextIcon from "./next.svg";
import ScssIcon from "./scss.svg";
import ReactIcon from "./react.svg";
import EthIcon from "./eth.svg";
import { Typography } from "../../Typography/Typography";
import { ReLink } from "../../ReLink/ReLink";
import ChatImg from "./chatImg.png";
import ReStoreImg from "./restoreImg.png";
import TopAppImg from "./topappImg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioProps } from "./PortfolioBlock.props";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";




export const PortfolioBlock = ({portfolioRef}:PortfolioProps) => {
  return (
    <div className={cn(styles.portfolio_block,styles1.block)} ref={portfolioRef} >
      <div className={styles.technology_stack}>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.1}} viewport={{ once: true }}><HtmlIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.3}} viewport={{ once: true }}><CssIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.5}} viewport={{ once: true }}><JsIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.7}} viewport={{ once: true }}><TsIcon />  </motion.div>      
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.9}} viewport={{ once: true }}><NextIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:1.1}} viewport={{ once: true }}><ScssIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:1.3}} viewport={{ once: true }}><ReactIcon /></motion.div>
        <motion.div  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:1.5}} viewport={{ once: true }}><EthIcon /></motion.div>
      </div>
             <Typography tag="title" size="m">Портфолио</Typography>
      <div className={styles.apps}>
        <div className={styles.column_1}>
          <div className={styles.apps_text}>  
            <Typography tag="h2">Приложения созданные мною.</Typography>
            <ReLink href="https://github.com/breketmax" >Github</ReLink>
          </div>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
              <Typography tag="h2">Top App</Typography>
              <Image src={TopAppImg} />
            </div>
            <div className={styles.details}>
              <Typography tag="h2">Top App</Typography>
              <Typography tag="h4">Первое серьезное приложение на Next + Typescript, даже REST API было задействовано.</Typography>
            </div>
          </motion.div>
          <div></div>
        </div>
          <div className={styles.column_2}>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
            <Typography tag="h2">Chat Test</Typography>
            <Image src={ChatImg} />
            </div>
            <div className={styles.details}>
              <Typography tag="h2">Chat Test</Typography>
              <Typography tag="h4">Самое первое приложение написанное на React, если бы сделал его хорошо я бы тут не был.</Typography> 
          </div>
          </motion.div>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
              <Typography tag="h2">ReStore</Typography>
              <Image src={ReStoreImg} />
            </div>
            <div className={styles.details}>
            <Typography tag="h2">ReStore</Typography>
            <Typography tag="h4">Магазин приложение, обучение основным механикам Redux началось именно с него.</Typography>
              
            </div>
          </motion.div>

          </div>

         
      </div>
    </div>
  );
};