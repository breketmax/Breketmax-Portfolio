export interface CoursesBlockTypes{
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