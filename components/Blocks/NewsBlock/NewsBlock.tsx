
import { Typography } from "../../Typography/Typography";
import { NewsProps } from "./NewsBlock.props";
import styles from "./NewsBlock.module.css";
import cn from "classnames";
import styles1 from "../../../pages/main.module.css";

export const NewsBlock = (news:NewsProps) =>{
  const news_item = news.news ? news.news : {
    id:3,
    time:"20 июля",
    title:"Банк России я не иду",
    text:"Ладно Банк России больше не надо держаться я споткнулся по пути к вам. <br/><br/> Не знаю опять же, почему, но выбор опять пал на другого кандитата, я уже устал если честно от отказов, но сдаваться рано, потом пожалеют же да? <br/><br/> Значит так надо, значит пока дорога другая предначертана. <br/><br/>  Топим родные, все будет но не сразу."
  };
  return(
    <div className={cn(styles.news_block,styles1.block)}>
      <div className={styles.news_block_content}>
        <Typography tag="h2">{news_item.title}</Typography>
        <div className={styles.news_text} dangerouslySetInnerHTML={{__html:news_item.text}} />
      </div>
    </div>
  );
}
