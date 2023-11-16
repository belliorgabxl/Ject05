"use client";

import styles from "./About.module.css";
import Navbar from "@/components/Navbar";
export default function AboutUs(){
    return(
        <>
        <Navbar/>
        <div className={styles.body}>
            <div className={styles.title}>
                <h1>About Us</h1>
            </div>
        <hr width={1000}></hr>
            <div className={styles.contain}>
                <p>This Project Webpage made for the Telecome Engineering Project<br/>
                We will Develope and learning skill to create something different</p>
            </div>
        <hr width={1000} ></hr>
            <div className={styles.foundername}>
                <h1 className={styles.titletwo}>Create & Develope By</h1>
                <p className={styles.name}><i>Bell / Por / Bam</i></p>
            </div>
        </div>
        </>
    )
}