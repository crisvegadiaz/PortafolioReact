import styles from "../styles/ImgRobot.module.css";

function ImgRobot() {
  return (
    <div className={styles.robot}>
      <div className={styles.head}>
        <div className={styles.antenna}></div>
        <div className={styles.eyes}>
          <div className={styles.eye}></div>
          <div className={styles.eye}></div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={`${styles.arm} ${styles.left}`}></div>
        <div className={styles.trunk}></div>
        <div className={`${styles.arm} ${styles.right}`}></div>
      </div>
    </div>
  );
}

export default ImgRobot;
