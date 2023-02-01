import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import VaultHeaderContainer from '../components/VaultHeaderContainer';
import DepositedTokensContainer from '../components/DepositedTokensContainer';
import Footer from '../components/Footer';
import styles from './VaultDefault.module.css';
import { AccountInfo } from '@aptos-labs/wallet-adapter-core';
import { client } from '../components/AptosClient';
import SkeletonOption from './SkeletonOption';

const VaultDefault = ({ account }: { account: AccountInfo }) => {
  const [depositedAPT, setDepositedAPT] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  return VaultInfoContent({ depositedAPT });
  // useEffect(() => {
  //   async function setDeposit() {
  //     const APT = await fetchDepositAPT({ account });
  //     setDepositedAPT(APT);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 1000);
  //   }
  //   setDeposit();
  // }, []);

  // if (isLoading) {
  //   return SkeletonOption();
  // } else {
  //   return VaultInfoContent({ depositedAPT });
  // }
};

const VaultInfoContent = ({ depositedAPT }: { depositedAPT: number }) => {
  return (
    <div className={styles.vaultDefault} id='VaultDefault-container'>
      <div className={styles.body}>
        <VaultHeaderContainer logo='../logo1.svg' />
        <div className={styles.vaultinfocontainer}>
          <DepositedTokensContainer />
          <div className={styles.logcontainer}>
            <div className={styles.vaultheader}>
              <b className={styles.activities}>Activities</b>
            </div>
            <div className={styles.loglistcontainer}>
              <div className={styles.loglistitemcontainer}>
                <div className={styles.logitemcontainer}>
                  <div className={styles.loginfocontainer}>
                    <img
                      className={styles.aptosSymbolIcon}
                      alt=''
                      src='../aptos-symbol1.svg'
                    />
                    <div className={styles.textcontainer}>
                      <div className={styles.status}>{`{{Status}}`}</div>
                      <div className={styles.date}>{`{{date}}`}</div>
                    </div>
                  </div>
                  <div className={styles.amountApt}>{`{{amount}} APT`}</div>
                </div>
                <div className={styles.logitemcontainer}>
                  <div className={styles.loginfocontainer}>
                    <img
                      className={styles.aptosSymbolIcon}
                      alt=''
                      src='../aptos-symbol2.svg'
                    />
                    <div className={styles.textcontainer}>
                      <div className={styles.status}>{`{{Status}}`}</div>
                      <div className={styles.date}>{`{{date}}`}</div>
                    </div>
                  </div>
                  <div className={styles.amountApt}>{`{{amount}} APT`}</div>
                </div>
              </div>
              <Button variant='text' color='primary'>
                + more
              </Button>
            </div>
          </div>
        </div>
        <Footer subtract='../subtract1.svg' />
      </div>
    </div>
  );
};

const fetchDepositAPT = async ({
  account,
}: {
  account: AccountInfo;
}): Promise<number> => {
  try {
    // const accountResource = await client.getAccountResource(
    //   account.address,
    //   `0x1::coin::CoinStore`
    // );
    // console.log(accountResource);
    console.log('hey');
    return 1;
  } catch (e: any) {
    return 0;
  }
};

export { VaultDefault };
