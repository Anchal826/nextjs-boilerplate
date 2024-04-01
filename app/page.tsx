import type { NextPage } from "next";
import Head from 'next/head';
import styles from "./index.module.css";
import NotificationButton from './NotificationButton';

const Screen1: NextPage = () => {
  const handleNotificationClick = () => {
    // Logic to send a notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Notification Title', {
        body: 'Notification Body',
      });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Notification Title', {
            body: 'Notification Body',
          });
        }
      });
    }
  };

  return (
    <div>
      <div className={styles.errorMsgsection2}>
        <div className={styles.section2ctaButton}>
          <NotificationButton onClick={handleNotificationClick} />
        </div>
      </div>
      {/* Other content */}
    </div>


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
