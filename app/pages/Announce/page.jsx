
import Navbar from "@/components/Navbar";
import Styles from "./announce.module.css";


export default function Announce(){
    return(
        <div className={Styles.body}>
        <Navbar/>
        <div className={Styles.container}>
            <div className={Styles.title}>
                 <h1 >Announcement</h1>
            </div>

            <div className={Styles.content}>

                <div className={Styles.detail}>
                    <h1 className={Styles.headtext}>Privacy Policy Updates</h1>
                    <p className={Styles.text}>
                    &emsp;&emsp;&emsp;You Privacy Policy is a critical part of<br/>
                        Protecting your business and your customers. It's<br/>
                        an up-to-date notice of your data practices,<br/>
                        including everything from collection to storage to<br/>
                        security. The key word in that sentence is up-to-<br/>
                        date
                    </p>
                </div>
                <div className={Styles.detail}>
                    <h1 className={Styles.headtext}>Power Cut</h1>
                    <p className={Styles.text}>
                    &emsp;&emsp;There will be a power cut from nine o'clock in the<br/>
                        morning until four o'clock in the afternoon.
                    </p>
                </div>
                
                
            </div>   
            <div className={Styles.content}>

                <div className={Styles.detail}>
                    <h1 className={Styles.headtext}>Privacy Policy Updates</h1>
                    <p className={Styles.text}>
                    &emsp;&emsp;&emsp;You Privacy Policy is a critical part of<br/>
                        Protecting your business and your customers. It's<br/>
                        an up-to-date notice of your data practices,<br/>
                        including everything from collection to storage to<br/>
                        security. The key word in that sentence is up-to-<br/>
                        date
                    </p>
                </div>
                <div className={Styles.detail}>
                    <h1 className={Styles.headtext}>Power Cut</h1>
                    <p className={Styles.text}>
                    &emsp;&emsp;There will be a power cut from nine o'clock in the<br/>
                        morning until four o'clock in the afternoon.
                    </p>
                </div>
            </div>          
        </div>
        </div>
    )
}