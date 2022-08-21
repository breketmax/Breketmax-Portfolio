import styles from "./CourseBlock.module.css";
import styles1 from "../../../pages/main.module.css";
import { CoursesBlockTypes } from "./CourseBlock.props";
import { Typography } from "../../Typography/Typography";
import Image from "next/image";
import CreatorIcon from "./creator.svg";
import DataIcon from "./data.svg";
import LanguageIcon from "./lang.svg";
import LessonsIcon from "./lessons.svg";
import TimeIcon from "./time.svg";
import Arrow from "../../ReLink/arrow2.svg";

import React, { useState } from "react";
import cn from "classnames";

export const CourseBlock= (courseItem:CoursesBlockTypes) =>{
  const course = courseItem.courseItem;
  const [buttonDisplay, setButtonDisplay] = useState(true);
  const [valid,setValid] = useState(true);
  const validateEmail = (e:React.FocusEvent<HTMLInputElement>) =>{
    if(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.target.value)){
      setButtonDisplay(false);
      setValid(true);
    }
    else{
      setButtonDisplay(true);
      setValid(false);
    }
  };
  return(
    <>
    <div className={styles.course_block_content}>
      <div className={styles1.container}>
        <div className={styles.course_intro}>
          <Typography tag="h2">{course.name}</Typography>
          <div className={styles.image_block}><Image src={course.img} width="360" height="220"/></div>
          <div dangerouslySetInnerHTML={{__html:course.description.part1}} className={styles.seo_text}/>
        </div>
        <div className={styles.course_info}>
          <div className={styles.course_data}>
            <div className={styles.course_data_item}>
              <TimeIcon/>
              <Typography tag="h4">Длительность</Typography>
              <Typography tag="p" size="m">{course.duration}</Typography>
            </div>
            <div className={styles.course_data_item}>
              <CreatorIcon/>
              <Typography tag="h4">Автор</Typography>
              <Typography tag="p" size="m">{course.creator}</Typography>
            </div>
            <div className={styles.course_data_item}> 
              <LessonsIcon/>
              <Typography tag="h4">Уроков</Typography>
              <Typography tag="p" size="m">{course.lessons} видео</Typography>
            </div>
            <div className={styles.course_data_item}>
              <DataIcon/>
              <Typography tag="h4">Дата выхода</Typography>
              <Typography tag="p" size="m">{course.data}</Typography>
              
            </div>
            <div className={styles.course_data_item}>
              <LanguageIcon/>
              <Typography tag="h4">Язык</Typography>
              <Typography tag="p" size="m">{course.lang}</Typography>
              
            </div>

          </div>
          <div className={styles.box}/>
          <div className={styles.course_description}>
          <div className={styles.seo_text} dangerouslySetInnerHTML={{__html:course.description.part2}}/>
          </div>
        </div>
      </div>
      
    </div>
    <div className={styles1.container}>
      <div className={styles.buy_block}>
        <Typography tag="h2">Вы можете получить этот курс всего за</Typography>
        <div className={styles.price}>
          <Typography tag="number" size="m">0.003</Typography>
          <Typography tag="h2">&nbsp;ETH</Typography>
        </div>
        <Typography tag="p" size="m">≈ 5$</Typography>
      </div>
      <div className={styles.user_info}>
        <input type="text"  placeholder="Введите ваш e-mail" onBlur={validateEmail} className={cn(styles.input,{
          [styles.nonValid]: !valid,
          [styles.valid]: valid,          
        })}/>
        
        <button disabled={buttonDisplay}>
          Купить
          {<Arrow/>}
        </button>
        <span className={cn(styles.errorText,{
          [styles.hidden]: !valid,
          [styles.hidden]: valid
        })}>Введите корректный e-mail.</span>
      </div>
    </div>

    </> 
  );
};