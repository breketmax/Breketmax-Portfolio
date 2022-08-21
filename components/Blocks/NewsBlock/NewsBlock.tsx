
import { Typography } from "../../Typography/Typography";
import { NewsProps } from "./NewsBlock.props";
import styles from "./NewsBlock.module.css";
import cn from "classnames";
import styles1 from "../../../pages/main.module.css";

export const NewsBlock = (news:NewsProps) =>{
  return(
    <div className={cn(styles.news_block,styles1.block)}>
      
      <div className={styles.news_block_content}>
        <Typography tag="h2">{news.news.title}</Typography>
        <div className={styles.news_text} dangerouslySetInnerHTML={{__html:news.news.text}} />
      </div>
    </div>
  );  
}