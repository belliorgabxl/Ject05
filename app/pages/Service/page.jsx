import Navbar from "@/components/Navbar";
import Styles from "./service.module.css";



export default function Service(){
    return(
        <>
        <Navbar/>

        <div className={Styles.body}>
            <div className={Styles.title}>
                 <h1 >Service & Help<br/>for custommer</h1>
            </div>
           
        </div>
        </>
    )
}