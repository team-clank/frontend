import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import styles from "./SSO.module.css";

const SSO: FunctionComponent = () => {
  return (
    <address className={styles.sso}>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <img className={styles.logoIcon} alt="" src="../logo4.svg" />
          <div className={styles.btnText} id="Address-container">
            <div className={styles.btnname}>0xfew...og2s</div>
          </div>
        </nav>
        <div className={styles.contentscontainer}>
          <div className={styles.textcontainer}>
            <b className={styles.title}>Welcome. Stay safe.</b>
            <div className={styles.text}>
              <p className={styles.theEmailYou}>
                The email you enter will be used for
              </p>
              <p className={styles.strong2faSecurity}>strong 2FA security.</p>
            </div>
          </div>
          <div className={styles.btnText1}>
            <img className={styles.googleIcon} alt="" src="../google.svg" />
            <b className={styles.title}>Continue with Gmail</b>
          </div>
        </div>
        <Footer subtract="../subtract.svg" />
      </div>
    </address>
  );
};

export default SSO;
