"use client";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar(){
    try{
    var getLocal = JSON.parse(localStorage.getItem("Userlist"));
    console.log("State = "+getLocal.State);
    const router = useRouter();
    const Logout = ()=>{
        localStorage.removeItem("Userlist");
        router.push("/");
    }
    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.mainbar}>
                <div className={styles.mainbar_logo}>
                <Link href="/mainpage"><Image src="/logo_house.png" width={60} height={55} alt='logo'></Image></Link>
                </div>
                <div className={styles.mainbar_title}>
                    <Link href="/mainpage">PorHub</Link>
                </div>
                <div className={styles.mainbar_search1}>
                    <div className={styles.mainbar_search2}>
                        <Image className="search_img" src="/search.png" 
                    width={35} height={35} alt='logo'></Image>
                    <input type="search" className={styles.search} name =""
                    placeholder="  i'm searching for..." id=""></input>
                    </div>
                </div>

                <div className={styles.mainbar_logout}>
                    <button className={styles.logout_btn} onClick={Logout}>Logout</button>
                </div>
            </div>

            <div className={styles.menubar}>
                <div  className={styles.burger}>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Announce">Announcement</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Service">Service</Link>
                </div>

                <div className={styles.menulist}>
                <Link href="/pages/AboutUs">About Us</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/NearMe">Near Me</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/RoomType">Room Type</Link>
                </div>

            </div>
        </nav>
        </>
    )}
    catch(e){
        return(
            <>

<nav className={styles.navbar}>
            <div className={styles.mainbar}>
                <div className={styles.mainbar_logo}>
                <Link href="/"><Image src="/logo_house.png" width={60} height={55} alt='logo'></Image></Link>
                </div>
                <div className={styles.mainbar_title}>
                    <Link href="/">PorHub</Link>
                </div>
                <div className={styles.mainbar_search1}>
                    <div className={styles.mainbar_search2}>
                        <Image className="search_img" src="/search.png" 
                    width={35} height={35} alt='logo'></Image>
                    <input type="search" className={styles.search} name =""
                    placeholder="  i'm searching for..." id=""></input>
                    </div>
                </div>

                <div className={styles.mainbar_register}>
                    <Link href="/pages/register">Register</Link>
                </div>

                <div className={styles.mainbar_login}>
                    <Link href="/pages/login">Login</Link>
                </div>
            </div>

            <div className={styles.menubar}>
                <div  className={styles.burger}>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Announce">Announcement</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Service">Service</Link>
                </div>

                <div className={styles.menulist}>
                <Link href="/pages/AboutUs">About Us</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/NearMe">Near Me</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/RoomType">Room Type</Link>
                </div>

            </div>
        </nav>
            </>
        )
    }
}