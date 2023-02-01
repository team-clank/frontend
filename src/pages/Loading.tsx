import { FunctionComponent } from "react";
import BackgroundContainer from "../components/BackgroundContainer";
import Footer from "../components/Footer";
import styles from "./Loading.module.css";

const Loading: FunctionComponent = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.logo} />
          <div className={styles.btnText} id="Loading-address-container">
            <div className={styles.btnname}>0xfew...og2s</div>
          </div>
        </div>
        <BackgroundContainer />
        <Footer subtract="../subtract.svg" />
      </div>
      <div className={styles.negativedim} />
      <img className={styles.logoIcon} alt="" src="../logo.svg" />
    </div>
  );
};

export default Loading;
