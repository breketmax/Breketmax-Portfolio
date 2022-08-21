import styles from "../main.module.css";
import { CoursesListBlock, Header, UpButton } from "../../components";
import cn from "classnames";


const Courses = () => {
  return(
    <div className={cn(styles.courses_list_page)}>
      <Header type="additional" title="Курсы" href=""/>
      <CoursesListBlock />
      <UpButton/>
    </div>
  );
};


export default Courses;
