import type { NextPage } from "next";
import Head from 'next/head';
import styles from "./index.module.css";
import Button from "./Button"; 


const Screen1: NextPage = () => {
  const handleNotificationClick = () => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('Hello!', {
          body: 'This is a notification from your Next.js app!'
        });
      }
    });
  }
};
  return (
    <div className={styles.screen1}>
      {/* Include manifest link in the head section */}
      <Head>
        <link rel="manifest" href="/manifest.json" />
        {/* Other meta tags */}
      </Head>
      
      <div className={styles.errorMsgsection2}>
        <div className={styles.section2ctaButton}>
           <Button onClick={handleNotificationClick}>Send Notification</Button>
          
        </div>
      </div>
      <div className={styles.errorMsgsection1}>
        <div className={styles.loremIpsum}>Lorem Ipsum...</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <img
        className={styles.errorMsgillustrationIcon}
        alt=""
        src="/error-msgillustration.svg"
      />
      <div className={styles.statusBar}>
        <div className={styles.mastersStatusBar}>
          <div className={styles.mastersStatusBarPartsL}>
            <div className={styles.timeGeo}>
              <div className={styles.time}>1:11</div>   
              <div className={styles.mastersStatusBarPartsA}>
              <div>
                <img
                    className={styles.sbIconGeo}
                    alt=""
                    src="/sbIconGeo.svg"
                  />  
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mastersStatusBarPartsR}>
            <div className={styles.indicators}>
              <img
                className={styles.mastersStatusBarPartsA1}
                alt=""
                src="/-masters--status-bar-parts--atoms--indicator-signal.svg"
              />
              <img
                className={styles.mastersStatusBarPartsA2}
                alt=""
                src="/-masters--status-bar-parts--atoms--indicator-wifi.svg"
              />
              <div className={styles.mastersStatusBarPartsA3}>
                <div className={styles.levels}>
                  <div className={styles.batteryLevels}>
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/levelstart.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/level2.svg"
                    />
                    <img
                      className={styles.level8Icon}
                      alt=""
                      src="/level8.svg"
                    />
                    <img
                      className={styles.level8Icon}
                      alt=""
                      src="/level8.svg"
                    />
                    <img
                      className={styles.levelStartIcon}
                      alt=""
                      src="/levellast.svg"
                    />
                  </div>
                </div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.rinotification2LineIcon}
        alt=""
        src="/rinotification2line.svg"
      />
    </div>
  );
};

export default Screen1;
