import type { NextPage } from 'next';
import cn from "classnames";
import styles from "./main.module.css";
import { AboutMeBlock, Footer, Header,IntroductionBlock, PortfolioBlock,WorkBlock,BlogBlock } from '../components';
import { useRef } from 'react';
import { UpButton } from '../components/UpButton/UpButton';
import { QuantityBlock } from '../components/Blocks/QuantityBlock/QuantityBlock';

const Home: NextPage = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const scrollToBlog =() => {
    blogRef.current?.scrollIntoView({
      behavior:"smooth",
      block:"start"
    }); 
  };
  const scrollToPortfolio =() => {
    portfolioRef.current?.scrollIntoView({
      behavior:"smooth",
      block:"start"
    }); 
  };
  
  const scrollToAboutMe =() => {
    aboutMeRef.current?.scrollIntoView({
      behavior:"smooth",
      block:"start"
    }); 
  };
  return (
    <div className={styles.main_page}>
        <div className={styles.intro}>
          <Header type="main" scrollToBlog={scrollToBlog} scrollToPortfolio={scrollToPortfolio} scrollToAboutMe={scrollToAboutMe}/>
          <IntroductionBlock/>
        </div>
        <AboutMeBlock aboutMeRef={aboutMeRef}/>
        <QuantityBlock/>
        <PortfolioBlock portfolioRef={portfolioRef} />
        <BlogBlock blogRef={blogRef} />
        <WorkBlock />
        <Footer/>
        <UpButton/>
    </div>
  );
};

export default Home;