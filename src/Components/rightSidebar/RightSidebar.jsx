import React from 'react'
import styles from '../../Styles/RightSidebar.module.css'

function RightSidebar() {
  return (
    <div className={styles.RightSidebar}>
      {/* Top  */}
      <div className={styles.TopBar}>
        <img src="public/Imeges/AYUSH_IMG2.jpg "
          alt=""
          style={{
            width: '43px',
            height: '43px',
            borderRadius: '50%',
          }} />

        <div className={styles.username}>
          {/* username */}
          <h2>ashus_web_dev</h2>
          {/* usser handle id  */}
          <p>@ashus_web_dev</p>
        </div>
        {/* switch button  */}
        <small>Switch</small>
      </div>


      {/* mid  */}
      <div className={styles.middalBar}>
        <div className={styles.suggested}>
          <h4>suggested for you</h4>
          <small>See All</small>
        </div>
        <div className={styles.userBar}>
          <img src="public/Imeges/AYUSH_IMG2.jpg "
            alt=""
            style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
            }} />

          <div className={styles.username}>
            <h2>ashus_web_dev</h2>
            <p>@ashus_web_dev</p>
          </div>

          <small>Follow</small>
        </div>

        <div className={styles.userBar}>
          <img src="public/Imeges/AYUSH_IMG2.jpg "
            alt=""
            style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
            }} />

          <div className={styles.username}>
            <h2>ashus_web_dev</h2>
            <p>@ashus_web_dev</p>
          </div>

          <small>Follow</small>
        </div>

        <div className={styles.userBar}>
          <img src="public/Imeges/AYUSH_IMG2.jpg "
            alt=""
            style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
            }} />

          <div className={styles.username}>
            <h2>ashus_web_dev</h2>
            <p>@ashus_web_dev</p>
          </div>

          <small>Follow</small>
        </div>

        <div className={styles.userBar}>
          <img src="public/Imeges/AYUSH_IMG2.jpg "
            alt=""
            style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
            }} />

          <div className={styles.username}>
            <h2>ashus_web_dev</h2>
            <p>@ashus_web_dev</p>
          </div>

          <small>Follow</small>
        </div>

        <div className={styles.userBar}>
          <img src="public/Imeges/AYUSH_IMG2.jpg "
            alt=""
            style={{
              width: '43px',
              height: '43px',
              borderRadius: '50%',
            }} />

          <div className={styles.username}>
            <h2>ashus_web_dev</h2>
            <p>@ashus_web_dev</p>
          </div>

          <small>Follow</small>
        </div>
      </div>

      {/* bottom  */}
      <div className={styles.bottombar}>
        <p>
          <a href="">About &middot; </a>
          <a href="">Help &middot; </a>
          <a href="">Press &middot; </a>
          <a href="">API &middot; </a>
          <a href="">Jobs &middot; </a>
          <a href="">Privacy &middot; </a>
          <a href="">Terms &middot; </a>
        </p>
        <p>
          <a href="">Locations &middot; </a>
          <a href="">Language &middot; </a>
          <a href="">Meta Verified &middot; </a>
        </p>

        <div className={styles.text}>
          <p>2024 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar

