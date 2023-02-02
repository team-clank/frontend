import NavContainer from '../components/NavContainer';
import WithdrawalAptosLimitForm from '../components/WithdrawalAptosLimitForm';
import Footer from '../components/Footer';
import styles from './LimitDefault.module.css';
import { AccountInfo } from '@aptos-labs/wallet-adapter-core';
import { Types } from 'aptos';
import { SignUpState } from '../components/AppState';

const LimitDefaultContent = ({
  account,
  signAndSubmitTransaction,
  setSignUpState,
}: {
  account: AccountInfo | null;
  signAndSubmitTransaction: <T extends Types.TransactionPayload, V>(
    transaction: T,
    options?: V | undefined
  ) => Promise<any>;
  setSignUpState: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={styles.limitDefault}>
      <div className={styles.body} id='SetWithdrawal-container'>
        <NavContainer logoImageUrl='../logo6.svg' />
        <WithdrawalAptosLimitForm
          account={account}
          signAndSubmitTransaction={signAndSubmitTransaction}
          setSignUpState={setSignUpState}
        />
        <Footer subtract='../subtract1.svg' />
      </div>
    </div>
  );
};

export default LimitDefaultContent;
