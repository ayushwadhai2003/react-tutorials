import React from 'react'
import styles from '../../Styles/LeftSidebar.module.css'
import { alloptions } from '../../constants/allposts';
import { FaThreads } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
// import { alloptions } from '../../constants/allposts';


function LeftSidebar() {

    return (
        <div className={styles.LeftSidebar}>
            <div className={styles.LeftSidebarTop}>
                <img src="Imeges/instragram1.jpg" alt="" />

                <div className={styles.alloptions}>
                    {
                        alloptions.map((option, i) => (
                            < div key={i} className={styles.oneOption}>
                                <option.icons style={{
                                    fontSize: '20px'
                                }} />
                                <h1>{option.title}</h1>
                            </div>
                        ))
                    }

                    <div className={styles.oneOption}>
                        <img
                            src="https://images.unsplash.com/photo-1718964312267-0397c0d57dd5?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            style={{
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%',
                            }} />
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>

            <div className={styles.LeftSidebarBottom}>
                < div className={styles.oneOption}>
                    <FaThreads style={{
                        fontSize: '20px'
                    }} />
                    <h1>Threads</h1>
                </div>
                < div className={styles.oneOption}>
                    <IoIosMenu style={{
                        fontSize: '20px'
                    }} />
                    <h1>More</h1>
                </div>
            </div>
        </div >
    )
}

export default LeftSidebar