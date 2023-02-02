import { useState } from 'react';
import { TextField, Button, getAccordionUtilityClass } from '@mui/material';
import styles from './WithdrawalAptosLimitForm.module.css';
import { submitTransaction } from '../components/AptosClient';
import { AccountInfo } from '@aptos-labs/wallet-adapter-core';
import { Types } from 'aptos';
import { SignUpState } from '../components/AppState';

const WithdrawalAptosLimitForm = ({
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
  const [withDrawal, setWithDrawal] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWithDrawal(event.target.value);
  };
  console.log(withDrawal);
  if (withDrawal == '') {
    return (
      <div className={styles.contentscontainer}>
        <WithdrawalMessage />
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
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={handleChange}
          />
        </div>
        <Button variant='outlined' color='primary' disabled>
          Confirm
        </Button>
      </div>
    );
  }
  return (
    <div className={styles.contentscontainer}>
      <WithdrawalMessage />
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
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={handleChange}
        />
      </div>
      <Button
        variant='outlined'
        color='primary'
        onClick={async () => {
          const payload = {
            type: 'entry_function_payload',
            function: `moduleaddress::main::create_list`,
            type_arguments: [],
            arguments: [],
          };
          console.log('before submit transaction');
          await submitTransaction({
            account,
            signAndSubmitTransaction,
            payload,
          });
          setSignUpState(SignUpState.setSubscribe);
        }}
      >
        Confirm
      </Button>
    </div>
  );
};

const WithdrawalMessage = () => {
  return (
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
  );
};

export default WithdrawalAptosLimitForm;
