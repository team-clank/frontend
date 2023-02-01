import { FunctionComponent } from 'react';
import Footer from '../components/Footer';
import styles from './SSO.module.css';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';

const SSO = ({
  setIsSsoLogin,
}: {
  setIsSsoLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <address className={styles.sso}>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <img className={styles.logoIcon} alt='' src='../logo4.svg' />
          <WalletSelector />
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
            <img className={styles.googleIcon} alt='' src='../google.svg' />
            <a className={styles.title} href='/'>
              Continue with Gmail
            </a>
          </div>
        </div>
        <Footer subtract='../subtract.svg' />
      </div>
    </address>
  );
};

export default SSO;
