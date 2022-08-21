import { Typography } from "../../Typography/Typography";
import styles from "./BlogBlock.module.css";
import Image from "next/image";
import Quote from "./quote.svg";
import cn from "classnames";
import { useState } from "react";
import Arrow from "../../ReLink/arrow2.svg";
import { API } from "../../../helpers/api";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogTypes } from "./BlogBlock.props";
import styles1 from "../../../pages/main.module.css";


export const BlogBlock = ({blogRef}:BlogTypes) => {
  const [index,setIndex] = useState(0);

  const changeIndex = (newIndex:number) =>{
    setIndex(newIndex);
    return ;
  };
  
  
  const sortedNews = [];
  for(let i = API.blog.news.length ; i > API.blog.news.length - 3 ;i--){
    sortedNews.push(API.blog.news[i-1]);
  }
  return (
    <div className={cn(styles.blog_block, styles1.block)} ref={blogRef}>
      <Typography tag="title">Блог</Typography>
      <div className={styles.blog_block_content}>
        <Typography tag="h2">Что нового?{<br/>}Мой блог и новости.</Typography>
        <div className={styles.news}>
          {sortedNews.map((item)=>{
            return(
              <Link href={`/${item.id}`} key={item.id}>
                <div className={styles.news_item} key={item.id}>
                <Typography tag="p" size="sm">{item.time}</Typography>
                <Typography tag="h4">{item.title}</Typography>
                <Arrow />
              </div>
              </Link>
            );
          })}
        </div>
        <motion.div className={styles.avatar}  initial={{ opacity: 0,x:10,y:0 }} whileInView={{ opacity: 1,x:0,y:0 }} transition={{duration:0.4}} viewport={{ once: true }}>
          <Image src={API.blog.reviews[index].img}></Image>
        </motion.div>
        <div className={styles.review}>
          <div>
            <Quote/>
            <Typography tag="h2">{API.blog.reviews[index].review}</Typography>
            <Typography tag="h4">{API.blog.reviews[index].name}</Typography>
            <Typography tag="p" size="sm">{API.blog.reviews[index].post}</Typography>
          </div>
          <div className={styles.control_panel}>
            <button onClick={() =>changeIndex(0)} className={cn(styles.control_button,{[styles.active]: index === 0}) } />
            <button onClick={() =>changeIndex(1)} className={cn(styles.control_button,{[styles.active]: index === 1}) } />
            <button onClick={() =>changeIndex(2)} className={cn(styles.control_button,{[styles.active]: index === 2}) } />
            <button onClick={() =>changeIndex(3)} className={cn(styles.control_button,{[styles.active]: index === 3}) } />
          </div>
        </div>
      </div>
    </div>
  );
};


