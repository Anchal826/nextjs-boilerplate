import type { NextPage } from "next";
import styles from "./index.module.css";

const Screen1: NextPage = () => {
  return (
    <div className={styles.screen1}>
      <div className={styles.errorMsgsection2}>
        <div className={styles.section2ctaButton}>
          <b className={styles.sendNotification}>Send Notification</b>
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
                <div className={styles.sbIconGeo}>􀋒</div>
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
