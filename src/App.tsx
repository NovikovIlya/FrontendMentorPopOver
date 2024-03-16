import {  Popover } from 'antd';
import avatar from './assets/images/avatar-michelle.jpg'
import drawers from './assets/images/drawers.jpg'
// @ts-ignore
import ReactLogo from './assets/images/icon-share.svg?react'
import styles from './App.module.css'
import iconOne from './assets/images/icon-facebook.svg'
import iconTwo from './assets/images/icon-twitter.svg'
import iconThree from './assets/images/icon-pinterest.svg'

function App() {
  const content = (
    <div className={styles.popCont}>
      <div className={styles.popContText}>SHARE</div>
      <div><img src={iconOne}/></div>
      <div><img src={iconTwo}/></div>
      <div><img src={iconThree}/></div>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.images} src={drawers} />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            Shift the overall look and feel by adding these wonderful
            touches to furniture in your home
          </div>
          <div className={styles.textTwo}>
            Ever been in a room and felt like something was missing? Perhaps
            it felt slightly bare and uninviting. I’ve got some simple tips
            to help you make any room feel complete.
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomMini}>
              <img className={styles.imagesTwo} src={avatar} alt='no photo' />
              <div className={styles.blockText}>
                <div className={styles.miniTextMain}>Michelle Appleton</div>
                <div className={styles.miniText}>28 Jun 2020</div>
              </div>
            </div>

            <Popover  color='#49556B' className={styles.pop} content={content} >
              <div className={styles.box}  ><ReactLogo fill='black' className={styles.logo} /></div>
            </Popover>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
