import styles from "./CoursesListBlock.module.css";
import { API } from "../../../helpers/api"; 
import Image from "next/image";
import { Typography } from "../../Typography/Typography";
import Star from "./star.svg"
import Link from "next/link";
import { Footer } from "../../Footer/Footer";
import Arrow from "../../ReLink/arrow2.svg";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";

export const CoursesListBlock =() => {
  return(
    <div className={cn(styles.courses_list_block, styles1.container)}>
    
      {API.courses.map((c,i)=>{
        return(
          <Link href={`/courses/${c.id}`} key={c.id}>
            <div className={styles.courses_list_item} key={i}>
              <div className={styles.courses_list_item_content}>
                <Image src={c.img} width="220" height="130"/>
                <div>
                  <Typography tag="h5">{c.name}</Typography>
                  <Typography tag="p" size="m">{c.creator}</Typography>
                  <div className={styles.starline}>{<><Star/><Star/><Star/><Star/><Star/></>}</div>
                </div>
              </div>
              <div className={styles.details}>
                <Typography tag="h2">Подробнее</Typography>
                <Arrow/>
              </div>
            </div>
          </Link>
        );
      })}
      <Footer/>
    </div>
  );
};