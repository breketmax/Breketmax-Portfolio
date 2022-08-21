import styles from "./TimelineBlock.module.css";
import Image from "next/image";
import { Typography } from "../../Typography/Typography";
 import {API} from "../../../helpers/api"
import { motion } from "framer-motion";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";

export const TimelineBlock = () => {
  return (
    <div className={cn(styles.timeline_block, styles1.block)}>
      {API.timeline.map((item,index)=>{
        return (
          <div className={styles.timeline_item} key={index}>
            <motion.div initial={{ opacity: 0,x:-20,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.7}} viewport={{ once: true }}><Image src={item.img} /></motion.div>
            <div className={styles.timeline_item_text}>
              <Typography tag="p" size="m"><b>{item.data}</b></Typography>
              <Typography tag="h2">{item.title}</Typography>
              <Typography tag="p" size="m">{item.text}</Typography>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};