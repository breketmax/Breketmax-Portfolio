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
import SilantImg from "./silant.png";
import DiveImg from "./dive.png";
import FarmImg from "./farm.png";
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
            <Typography tag="h2">Приложения созданные мною</Typography>
            <ReLink href="https://github.com/breketmax" >Github</ReLink>
          </div>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
              <Typography tag="h2">D.I.V.E.</Typography>
              <Image src={DiveImg} />
            </div>
            <div className={styles.details}>
              <Typography tag="h2">D.I.V.E.</Typography>
              <Typography tag="h4">Учебный production проект на Vue3 с Options API. Разработали совместно с преподавателем из
                университета, с него идея с меня реализация. С данным же проектом выступал на дипломе, оценили приложение
                и выступление на отлично.
              </Typography>
            </div>
          </motion.div>
          <div></div>
        </div>
          <div className={styles.column_2}>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
            <Typography tag="h2">Мой Силант</Typography>
            <Image src={SilantImg} />
            </div>
            <div className={styles.details}>
              <Typography tag="h2">Мой Силант</Typography>
              <Typography tag="h4">Приложение которое наша команда создала с 0. Первый мой опыт в качестве
                менеджера, дизайнера, фронтендера и аналитика. Потраченные часы принеси нам 1 место в
                хакатоне от SkillFactory x ТПУ.
              </Typography>
              <ReLink href="https://gitlab.com/Azazlokus/hack" >Gitlab</ReLink>
          </div>
          </motion.div>
          <motion.div className={styles.app_card}  initial={{ opacity: 0,x:-30,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.2}} viewport={{ once: true }}>
            <div className={styles.card_content}>
              <Typography tag="h2">Платформа</Typography>
              <Image src={FarmImg} />
            </div>
            <div className={styles.details}>
            <Typography tag="h2">Платформа</Typography>
            <Typography tag="h4">Еще один production проект на Vue3 с Composition API. С него началось
            мое знакомство с реальной разработкой. Стоял у основания этого приложения,на нем же и дорос до старшего по
            фронту на проекте.</Typography>
              <ReLink href="https://welcome.easy-retail.org/" >Познакомиться</ReLink>
            </div>
          </motion.div>
          </div>
      </div>
    </div>
  );
};
