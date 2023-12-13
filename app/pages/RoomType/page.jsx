import style from "./roomtype.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";


export default function RoomType(){
    return(
        <div className={style.body}>
            <div className={style.container}>
                <Navbar/>
                <div className={style.container1}>
                    <div>
                        <div className={style.container11}>
                              Comfort Room
                        </div>
                        <div>
                           <div className={style.box1}>
                           <div className={style.container12}>
                              <Link href="/"><Image src="/r1.jpeg" width ={311} height ={200} /></Link>    
                           </div>
                           <div className={style.smallbox1}>
                              <div className={style.smallbox11}>Comfort Room</div>
                              <div className={style.smallbox12}>Ladkrabang       3500B</div>
                           </div>
                           </div>
                        
                        </div>
                    </div>
                    

                    <div className={style.box2}>
                        <div className={style.container13}>
                           <Link href="/"><Image src="/r2.jpeg" width ={311} height ={200}/></Link>
                        </div>
                        <div className={style.smallbox1}>
                              <div className={style.smallbox11}>Luxe Room</div>
                              <div className={style.smallbox12}>Ladkrabang       5500B</div>
                        </div>
                    </div>
                    <div>
                        <div className={style.container14}>
                           <button onClick='/'>SeeAll</button>
                        </div>
                        <div className={style.box3}>
                           <div className={style.container15}>
                               <Link href="/"><Image src="/r3.jpeg" width ={311} height ={200}/></Link>
                           </div>
                            <div className={style.smallbox1}>
                                 <div className={style.smallbox11}>Standard Room</div>
                                 <div className={style.smallbox12}>Ladkrabang       4500B</div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={style.container2}>
                    <div>
                        <div className={style.container21}>
                              Standard Room
                        </div>
                        <div className={style.box4}>
                           <div className={style.container22}>
                                 <Link href="/"><Image src="/r4.jpeg" width ={311} height ={200} /></Link>
                           </div>
                           <div className={style.smallbox1}>
                                <div className={style.smallbox11}>Comfort Room</div>
                                <div className={style.smallbox12}>Ladkrabang       3500B</div>
                            </div>
                        
                        </div>
                    </div>


                    <div className={style.box5}>
                        <div className={style.container23}>
                           <Link href="/"><Image src="/r5.jpeg" width ={311} height ={200}/></Link>
                        </div>
                        <div className={style.smallbox1}>
                            <div className={style.smallbox11}>Luxe Room</div>
                            <div className={style.smallbox12}>Ladkrabang       5500B</div>
                        </div>
                    </div>
                    <div>
                        <div className={style.container24}>
                           <button onClick='/'>SeeAll</button>
                        </div>
                        <div className={style.box6}>
                           <div className={style.container25}>
                               <Link href="/"><Image src="/r6.jpeg" width ={311} height ={200}/></Link>
                           </div>
                           <div className={style.smallbox1}>
                                <div className={style.smallbox11}>Standard Room</div>
                                <div className={style.smallbox12}>Ladkrabang       4500B</div>
                            </div>
                        </div>
                    </div>
                </div>



git
                <div className={style.container3}>
                    <div>
                        <div className={style.container31}>
                            Recommend Room
                        </div>
                        <div className={style.box7}>
                           <div className={style.container32}>
                              <Link href="/"><Image src="/r7.jpeg" width ={500} height ={400}/></Link>
                           </div>
                        </div>

                    </div>
                    <div className={style.container33}>
                        <div className={style.container331}>
                            Standard Room
                        </div>
                        <div className={style.container332}>
                            <div>Ladkrabang 54</div>
                            <div>Price 4500 B/Month</div>
                        </div>
                        <div className={style.container333}>
                            <div>
                                <Image src = "/door.svg" width={20} height ={20}  />
                                Room Amenities
                            </div>
                            
                        </div>
                        <div className={style.container334}>
                            <div>
                                <Image src = "/เตียง.png" width={10} height ={10}  />  
                                furniture
                            </div>
                            <div>
                                <Image src = "/wifi.svg" width={10} height ={10}  />
                                Wi-Fi
                            </div>
                            <div>
                            <Image src = "/Washing.png" width={10} height ={10}  />
                                Washing Machine
                            </div>
                        </div>
                        <div className={style.container335}>
                            <Image src = "/building.svg" width={20} height ={20}  />
                            Building Amenities
                       </div>
                        <div className={style.container336}>
                            <div>
                                <Image src = "/parking.png" width={10} height ={10}  />
                                Parking
                            </div>
                            <div>
                                <Image src = "/globe.svg" width={10} height ={10}  />
                                Internet Cafe
                            </div>
                            <div>
                                <Image src = "/cctv.png" width={10} height ={10}  />
                                CCTV
                            </div>
                            <div>
                                <Image src = "/Drink.png" width={10} height ={10}  />
                                Drinking Water Vending
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                


            </div>

        </div>
    )
}