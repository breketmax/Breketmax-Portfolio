import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { NewsBlock } from "../components";
import { API }from "../helpers/api";
import { Header } from "../components";


const News = (newsItem:NewsTypes) => {
  const news = newsItem.newsItem;
  return(
    <div>
      <Header type="additional" title="Новости" href=""/>
      <NewsBlock news={news}/>
    </div>
  );
};


export const getStaticPaths:GetStaticPaths = async () => {
  const paths = [];
  for(let i = API.blog.news.length ; i > API.blog.news.length - 3 ;i--){
    paths.push( {params: { id: API.blog.news[i-1].id.toString() } });
  }
  return {
    paths,
    fallback:true
  };
};

export const getStaticProps:GetStaticProps<NewsTypes> = async ({params}:GetStaticPropsContext<ParsedUrlQuery>) => {
  if(!params){
    return {
      notFound:true
    };
  }
  const newsItem = API.blog.news.find(n => n.id.toString() === params.id);
  if(!newsItem){
    return{
      notFound:true
    };
  }
  return{
    props:{
      newsItem
    }
  };
};


interface NewsTypes extends Record<string,unknown>{
  newsItem:{
    id:number,
    time:string,
    title:string,
    text:string
}
}

export default News;