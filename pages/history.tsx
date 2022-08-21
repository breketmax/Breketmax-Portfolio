import type { NextPage } from 'next';
import styles from "./main.module.css";
import {  Footer, Header, HistoryBlock, TimelineBlock } from '../components';
import { UpButton } from '../components/UpButton/UpButton';
import Image from 'next/image';
import Me from "../helpers/me.jpg";

const History: NextPage = () => {
  return (
    <div className={styles.history_page}>
        <Header type="additional" title="История" href=""/>
        <Image src={Me}/>
        <HistoryBlock />
        <TimelineBlock/>
        <Footer/>
        <UpButton/>
    </div>
  );
};

export default History;