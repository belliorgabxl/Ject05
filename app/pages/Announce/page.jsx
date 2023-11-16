
import Navbar from "@/components/Navbar";
import Styles from "./announce.module.css";


export default function Announce(){
    return(
        <>
        <Navbar/>

        <div className={Styles.body}>
            <div className={Styles.title}>
                 <h1 >Announcement</h1>
            </div>
           
        </div>
        </>
    )
}