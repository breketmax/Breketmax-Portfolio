import styles from "./PortfolioBlock.module.css";
import HtmlIcon from "./html.svg";
import CssIcon from "./css.svg";
import JsIcon from "./js.svg";
import TsIcon from "./ts.svg";
import NextIcon from "./next.svg";
import ScssIcon from "./scss.svg";
import ReactIcon from "./react.svg";
import VueIcon from "./vue.svg";
import { Typography } from "../../Typography/Typography";
import { ReLink } from "../../ReLink/ReLink";
import ChatImg from "./chatimg.png";
import ReStoreImg from "./restoreimg.png";
import TopAppImg from "./topappimg.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioProps } from "./PortfolioBlock.props";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";
import {TechnologyBlock} from "./TechnologyBlock";


export const PortfolioBlock = ({portfolioRef}:PortfolioProps) => {
  const technologyStack = [ReactIcon, VueIcon, TsIcon, NextIcon,  JsIcon,HtmlIcon, CssIcon, ScssIcon];
  return (
    <div className={cn(styles.portfolio_block,styles1.block)} ref={portfolioRef} >
      <div className={styles.technology_stack}>
        {technologyStack.map((Icon, index) => {
          return (
              <TechnologyBlock key={index} duration={index * 0.2}>
                <Icon />
              </TechnologyBlock>
          );
        })}
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
