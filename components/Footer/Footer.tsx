import { Typography } from "../Typography/Typography";
import styles from "./Footer.module.css";
import logo from '../Header/bm.png';
import Image from "next/image";
import TelegramIcon from "./telegram.svg";
import VkIcon from "./vk.svg";
import MailIcon from "./mail.svg";
import { motion } from "framer-motion";
import styles1 from "../../pages/main.module.css";
import cn from "classnames";

export const Footer = () => {
  return (
    <div className={cn(styles.footer,styles1.block)}>
        <Image src={logo} width="140px" height="40px"/>
        <Typography tag="h3">Спасибо за просмотр,{<b> на этом все.</b>}</Typography>
        <div className={styles.link_block}>
        <motion.a  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.1}} viewport={{ once: true }} href="https://t.me/breketmax" target="_blank"><TelegramIcon/></motion.a>
        <motion.a  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.3}} viewport={{ once: true }} href="https://vk.com/breketmax" target="_blank"><VkIcon/></motion.a>
        <motion.a  initial={{ opacity: 0,x:0,y:10 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.5}} viewport={{ once: true }} href="mailto:maxim_01032002@mail.ru"><MailIcon/></motion.a>
        </div>
    </div>
  );
};