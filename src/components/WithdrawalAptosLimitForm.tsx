import { TextField, Button } from '@mui/material';
import styles from './WithdrawalAptosLimitForm.module.css';

const WithdrawalAptosLimitForm = ({
  setIsSsoLogin,
}: {
  setIsSsoLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.contentscontainer}>
      <div className={styles.textcontainer}>
        <b className={styles.title}>
          <p className={styles.pleaseEnterYour}>Please enter your</p>
          <p className={styles.withdrawalAptosLimit}>withdrawal Aptos limit</p>
        </b>
        <div className={styles.text}>
          <p className={styles.pleaseEnterYour}>
            2FA is required if you request a withdrawal above
          </p>
          <p className={styles.withdrawalAptosLimit}>the withdrawal limit.</p>
        </div>
      </div>
      <div className={styles.input}>
        <TextField
          className={styles.limitinputcontainer}
          color='primary'
          variant='standard'
          defaultValue='Set your withdrawal limit'
          type='number'
          label='Set your withdrawal limit'
          placeholder='Placeholder'
          size='medium'
          margin='none'
          required
        />
        <div className={styles.aptoscontainer}>
          <img
            className={styles.aptosSymbolIcon}
            alt=''
            src='../aptos-symbol3.svg'
          />
          <b className={styles.apt}>APT</b>
        </div>
      </div>
      <Button
        variant='outlined'
        color='primary'
        onClick={() => {
          setIsSsoLogin(true);
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

export default WithdrawalAptosLimitForm;
