import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { API }from "../../helpers/api";
import styles from "../main.module.css";
import { CourseBlock, Footer, Header } from "../../components";
import { UpButton } from "../../components/UpButton/UpButton";

const Course = (courseItem:CourseTypes) => {

  return(
    <div className={styles.course_page}>
      <Header type="additional" title="Курсы" href="courses"/>
      <CourseBlock courseItem={courseItem.courseItem}/>
      <Footer/>
      <UpButton/>
    </div>  
  );
};


export const getStaticPaths:GetStaticPaths = async () => {
  const paths = [];
  for(let i = 0 ; i < API.courses.length  ;i++){
    paths.push( {params: { id: API.courses[i].id.toString() } });
  }
  return {
    paths,
    fallback:true
  };
};

export const getStaticProps:GetStaticProps<CourseTypes> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return {
      notFound:true
    };
  }
  const courseItem = API.courses.find(c => c.id.toString() === params.id);
  if(!courseItem){
    return{
      notFound:true
    };
  }
  return{
    props:{
      courseItem
    }
  };
};

export interface CourseTypes extends Record<string,unknown>{
  courseItem:{  
    name:string,
    id:number,
    img:string,
    creator:string,
    rating:number,
    duration:string,
    lessons:number,
    data:string,
    lang:string,
    description:{
      part1:string,
      part2:string
    }
  }

}

export default Course;