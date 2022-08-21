import { Typography } from "../../Typography/Typography";
import styles from "./AboutMeBlock.module.css";
import { ReLink } from "../../ReLink/ReLink";
import { QuantityCard } from "../../QuantityCard/QuantityCard";
import { AboutMeProps } from "./AboutMeBlock.props";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";

export const AboutMeBlock = ({aboutMeRef}:AboutMeProps):JSX.Element => {
  const date = '2019-02-09T00:00:00.000Z';
  const currentDate = Date.parse(new Date().toString());
  const days = Math.round((currentDate - Date.parse(date))/86400000);
  const ending = () => {
    const daysStr = days.toString();
    if(daysStr[daysStr.length-1] === "1"){
      return "день.";
    }
    else if (daysStr[daysStr.length-1] === "2" || daysStr[daysStr.length-1] === "3" || daysStr[daysStr.length-1] === "4"){
      return "дня.";
    }
    else {
      return "дней.";
    }
  };
  return (
    <div className={cn(styles.about_me_block,styles1.block)} ref={aboutMeRef}>
      <div className={styles.about_me_block_content}>
        <div className={styles.work}>
          <Typography tag="title">Обо мне</Typography>
          <Typography tag="h2">Могу менять цвета кнопок и двигать элементы на странице.</Typography>
          <Typography tag="p" size="m">Любой тип работы для frontend-джуна, пожалуйста дайте возможность, я очень хочу творить.</Typography>
          <ReLink href="mailto:breketmax@gmail.com">breketmax@gmail.com</ReLink>
        </div>
        <div className={styles.numbers}>
          <Typography tag="h2">В 16 лет попробовал разработку веб-приложений и зависим уже</Typography>
          <div className={styles.number_block}><Typography tag="number" size="m">{Math.floor(days/1000)} {days % 1000}</Typography><Typography tag="h2">{ ending()}</Typography></div>
          <Typography tag="p" size="m">За плечами множество пройденных курсов и ни одного, пока что, довольного клиента, кроме моей матери.</Typography>
          <div className={styles.double_number_block}>
          <div className={styles.number_block}>
            <Typography tag="number">4</Typography><Typography tag="h4">проекта на React.</Typography> 
          </div>
          <div className={styles.number_block}>
            <Typography tag="number">3</Typography><Typography tag="h4">проваленных собеседования.</Typography> 
          </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};