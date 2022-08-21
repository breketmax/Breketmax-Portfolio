import { ReLink } from "../../ReLink/ReLink";
import { Typography } from "../../Typography/Typography";
import styles from "./WorkBlock.module.css";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";

export const WorkBlock = () => {
  return (
    <div className={cn(styles.work_block, styles1.block)}>
      <Typography tag="title"> Дополнительно</Typography>
      <div className={styles.work_block_content}>
        <div className={styles.ask_work}>
          <Typography tag="h2">Есть работа?{<br/>}Давайте обсудим.</Typography>
          <Typography tag="p" size="m">Напишите мне на почту или в телеграм, где мы обсудим все детали.</Typography>
          <ReLink href="mailto:breketmax@gmail.com">breketmax@gmail.com</ReLink>
          <ReLink href="https://t.me/breketmax">breketmax</ReLink>
        </div>
        <div className={styles.shop}>
        <Typography tag="h2">Как достичь таких же высот в разработке?</Typography>
          <Typography tag="p" size="m">Хороший вопрос, специально для вас я собрал свой сборник курсов, которые вы можете скачать и начать покорять Frontend.</Typography>
          <ReLink href="/courses">За знаниями!</ReLink>
        </div>
      </div>
    </div>
  );
};