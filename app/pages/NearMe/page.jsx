"use client";
import Styles from "./nearme.module.css";
import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
export default function NearM(){
    return(
        <>
        <Navbar/>

        <div className={Styles.body}>

            <Map/>
            <div className={Styles.title}>
                 <h1 >The rooms near me</h1>
            </div>
           
        </div>
        </>
    )
}