
import styles from  "./roomtype.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function RoomType(){
    return(
        <div className={styles.body}>
        <div className={styles.container}>
                <Navbar/>
                

        <div className={styles.content}>

            <div className={styles.detailhead1}>
                <div className={styles.detail1}>
                        name of typeroom
                </div>

                <div className={styles.detail1}> 
                </div>

                <div className={styles.detail1}>
                        see all
                </div>
            </div>

            <div className={styles.detailhead2}>
                    <div className={styles.detail2}>
                            1
                    </div>
                    <div className={styles.detail2}>
                            2
                    </div>
                    <div className={styles.detail2}>
                        3
                    </div>
            </div>
        </div>
            
        <div className={styles.content}>

<div className={styles.detailhead1}>
    <div className={styles.detail1}>
            name of typeroom
    </div>

    <div className={styles.detail1}> 
    </div>

    <div className={styles.detail1}>
            see all
    </div>
</div>

<div className={styles.detailhead2}>
        <div className={styles.detail2}>
                1
        </div>
        <div className={styles.detail2}>
                2
        </div>
        <div className={styles.detail2}>
            3
        </div>
</div>
</div>
<div className={styles.content}>

            <div className={styles.detailhead1}>
                <div className={styles.detail1}>
                        name of typeroom
                </div>

                <div className={styles.detail1}> 
                </div>

                <div className={styles.detail1}>
                        see all
                </div>
            </div>

            <div className={styles.detailhead2}>
                    <div className={styles.detail2}>
                            1
                    </div>
                    <div className={styles.detail2}>
                            2
                    </div>
                    <div className={styles.detail2}>
                        3
                    </div>
            </div>
        </div>

        </div>
        </div>
    )
}
