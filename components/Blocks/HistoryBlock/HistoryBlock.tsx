import { Typography } from "../../Typography/Typography";
import styles from "./HistoryBlock.module.css";
import Quote from "../BlogBlock/quote.svg";
import BM from "./BM.png";
import Image from "next/image";
import { motion } from "framer-motion";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";

export const HistoryBlock = () => {
  return (
    <motion.div className={cn(styles.history_block, styles1.block)} initial={{ opacity: 0,x:0,y:20 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.3}} viewport={{ once: true }}>
      <div className={styles.history_block_content}>
        <div className={styles.intro_text}>
          <Typography tag="h2">Привет,{<br/>}Я Максим Щеглов</Typography>
          <Typography tag="p" size="m">Это если вы вдруг забыли.{<br/>}Добро пожаловать в историю моего успеха.</Typography>
        </div>
        <div/>
        <div className={styles.history}>
          <Typography tag="h2">Немного больше обо мне.</Typography>
          <Typography tag="p" size="m">Все началось в 2012 году с flash игр в браузере, уже тогда маленький я заинтересовался принципами работы веб-страниц и спустя пару лет решился все таки попробовать программирование, а начал с самого легкого, по статистике, языка C++.
              {<br/>}
              {<br/>}
              Просмотрев пару роликов на YouTube, написав первый калькулятор, я решил что преисполнился в программировании, условные операторы и циклы больше не были проблемой, пик достигнут и плюсы были отложены на полку достижений.
              {<br/>}
              {<br/>}
              Шли годы, менялось мировоззрение, 2018 год стал переломной точкой, именно в это время я вдруг осознал, что для нашей компании друзей необходим сайт, дабы люди узнали о нашей деятельности(познакомиться с ней вы можете по ссылке).
              Взяв волю в кулак были просмотрены бесплатные курсы по веб-разработке на ванильном JavaScript и HTML. 
              {<br/>}
              {<br/>}
              Год упорной работы по 3 часа в месяц дал плоды, сайт создан, 
              компании уже нет, но это все уже было не важно, ведь именно тогда я понял, чему хочу посвятить свою жизнь.
              {<br/>}
              {<br/>}
              Далее по накатанной, выбор фреймворка, прохождение курсов, наполнение портфолио, освоение новых технологий и самое главное - прохождение собеседований в IT компании, к слову, ни одно не было увечано успехом, но как сказал один мудрый человек:
          </Typography>
          
        </div>
        <div/>
        <div className={styles.quote}>
          <Quote/>
          <motion.span initial={{ opacity: 0,x:0,y:20 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:1}} viewport={{ once: true }}>Бог дает дорогу идущему.</motion.span>
          <div className={styles.divide}/>
          <Typography tag="p">Андрей Косолапов</Typography>
        </div>
        <Typography tag="p" size="m">На этом все, спасибо, что прочитали мою историю становления, далее вас ждет краткий таймлайн моей деятельности, надеюсь вам было интересно, иначе зачем я все это делал.</Typography>
        <div/>
        <div className={styles.handwrite}>
          <Image src={BM}/>
        </div>
      </div>
    </motion.div>
  );
};