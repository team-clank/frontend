import NavContainer from '../components/NavContainer';
import WithdrawalAptosLimitForm from '../components/WithdrawalAptosLimitForm';
import Footer from '../components/Footer';
import styles from './LimitDefault.module.css';

const LimitDefaultContent = ({
  setIsSsoLogin,
}: {
  setIsSsoLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.limitDefault}>
      <div className={styles.body} id='SetWithdrawal-container'>
        <NavContainer logoImageUrl='../logo6.svg' />
        <WithdrawalAptosLimitForm setIsSsoLogin={setIsSsoLogin} />
        <Footer subtract='../subtract1.svg' />
      </div>
    </div>
  );
};

export default LimitDefaultContent;
