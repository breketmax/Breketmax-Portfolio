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
  const course = courseItem.courseItem ? courseItem.courseItem : {
    name:"React + Next.js - с нуля. TypeScript, Hooks, SSR и CSS Grid",
    id:0,
    img:"https://cdn.coursehunter.net/courses/360x220/react-next-js-s-nulya-typescript-hooks-ssr-i-css-grid.jpg",
    creator:"udemy",
    rating:5,
    duration:"19:42:34",
    lessons:137,
    data:"05/07/2021",
    lang:"Русский",
    description:{
      part1:"Полный курс по современному Frontend на React и Next.js. Всё от CSS Grid и TypeScript до React Hooks и SSR. Next.js - готовый к production framework для React - самой популярной JavaScript библиотеки на сегодняшний день. Он позволяет разрабатывать производительные, SEO-friendly сайты с использованием Server Side Rendering (SSR) и статической генерацией страниц. <br/><br/>",
      part2:"При этом от вас требуется только базовое знание CSS, HTML и JavaScript, так в рамках курса мы не только разберём Next.js, но и React с нуля. При этом мы будем писать не просто какой-то учебный проект, а реальный production сайт, посвящённый рейтингам. <br/><br/>Мы детально разберём:<ul><li> TypeScript</li><li> Настройку окружения и сборку проекта </li><li> Работу в Figma </li><li> React Hooks </li><li> Создание компонентов </li><li> Контекст </li><li> Роутинг NextJS </li><li> Вёрстку на CSS grid</li><li> Как работает Server Side Rendering (SSR) и статическая генерация страниц </li><li> Встроенные компоненты Next.js </li><li> Работу с формами через react-hook-form </li><li> Анимацию с помощью Framer Motion</li><li> Доступность с клавиатуры и работу ScreenReader </li><li> Подготовку приложения к production и работу Docker</li></ul>Каждый модуль содержит как теоретическую часть, так и live-code, где мы в месте будем создавать приложение с нуля. В конце каждого модуля вас ожидает тест, который позволит укрепить ваши знания, а небольшие упражнения - попрактиковаться писать код. <br/><br/>В результате курса вы получите знания и навыки, которые необходимы frontend разработчику на реальных проекта. <br/><br/>"
    }
  };

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