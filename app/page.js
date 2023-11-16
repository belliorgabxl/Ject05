"use client";
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/page.module.css'
import Link from "next/link"
import Navbar from '@/components/Navbar'
import Map from '@/components/Map';
export default function Home() {
  return (
    <div className={styles.body}>
      <Navbar/>
    <div className={styles.container} >
          <div className={styles.title}>
              <h1>Discover your new favourite stay</h1>
          </div>
          <Map/>
          
          <div className={styles.func_btn}>
            Fucntional Buntton
          </div>

          <div className={styles.content_btn1}>
                <div className={styles.content_btn1_fix}>
                 <Link href="/">Suggest</Link>
                  </div>
                <div className={styles.content_btn1_fix}>
                  <Link href="/">Lastest Update</Link>
                  </div>
          </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r1.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r2.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r3.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r4.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r5.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/r6.jpeg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}