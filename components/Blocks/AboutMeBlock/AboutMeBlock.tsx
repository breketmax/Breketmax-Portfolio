import { Typography } from "../../Typography/Typography";
import styles from "./AboutMeBlock.module.css";
import { ReLink } from "../../ReLink/ReLink";
import { AboutMeProps } from "./AboutMeBlock.props";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";
import {getDaysDeclensions, splitNumberByThreeDigits} from "../../../helpers/scripts";

export const AboutMeBlock = ({aboutMeRef}:AboutMeProps):JSX.Element => {
  const startDate = '2019-02-09T00:00:00.000Z';
  const currentDate = Date.parse(new Date().toString());
  const daySinceStart = Math.round((currentDate - Date.parse(startDate))/86400000);
  return (
    <div className={cn(styles.about_me_block,styles1.block)} ref={aboutMeRef}>
      <div className={styles.about_me_block_content}>
        <div className={styles.work}>
          <Typography tag="title">Обо мне</Typography>
          <Typography tag="h2">Отдам фронтенд разработчика в добрые руки</Typography>
          <Typography tag="p" size="m">А если серьезно, то сейчас в поисках работы в команде профессионалов.
            В компании ценю отлаженность рабочих прооцессов и перспективы развития как специалиста.
          </Typography>
          <ReLink href="mailto:breketmax@mail.com">breketmax@mail.com</ReLink>
        </div>
        <div className={styles.numbers}>
          <Typography tag="h2">В 16 лет попробовал разработку веб-приложений и зависим уже</Typography>
          <div className={styles.number_block}>
            <Typography tag="number" size="m">{splitNumberByThreeDigits(daySinceStart)}</Typography>
            <Typography tag="h2">{ getDaysDeclensions(daySinceStart)}</Typography>
          </div>
          <Typography tag="p" size="m">За плечами множество закрытых модулей, выучено священное писание по Scrum,
          а также все семь смертных грехов по непопаданию в спринт.</Typography>
          <div className={styles.double_number_block}>
          <div className={styles.number_block}>
            <Typography tag="number">3</Typography><Typography tag="h4">года production разработки.</Typography>
          </div>
          <div className={styles.number_block}>
            <Typography tag="number">2</Typography><Typography tag="h4">реализованных проекта.</Typography>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
};
