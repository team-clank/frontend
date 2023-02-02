import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Landing from './pages/Landing';
import SSO from './pages/SSO';
import { VaultDefault } from './pages/VaultDefault';
import SubscribeDefault from './pages/SubscribeDefault';
import Loading from './pages/Loading';
import LimitDefaultContent from './pages/LimitDefault';
import { useEffect, useState } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import '@aptos-labs/wallet-adapter-ant-design/dist/index.css';

import { client } from './components/AptosClient';

import { SignUpState } from './components/AppState';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const { account, signAndSubmitTransaction } = useWallet();
  const [signUpState, setSignUpState] = useState(0);

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  if (account == null) {
    return (
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/vault' element={<Landing />} />
      </Routes>
    );
  } else {
    if (signUpState == SignUpState.connectSSO) {
      return (
        <Routes>
          <Route path='/' element={<SSO setSignUpState={setSignUpState} />} />
          <Route path='/vault' element={<Landing />} />
        </Routes>
      );
    } else if (signUpState == SignUpState.setWithdrawal) {
      return (
        <Routes>
          <Route
            path='/'
            element={
              <LimitDefaultContent
                account={account}
                signAndSubmitTransaction={signAndSubmitTransaction}
                setSignUpState={setSignUpState}
              />
            }
          />
          <Route path='/vault' element={<Landing />} />
        </Routes>
      );
    } else if (signUpState == SignUpState.setSubscribe) {
      return (
        <Routes>
          <Route
            path='/'
            element={<SubscribeDefault setSignUpState={setSignUpState} />}
          />
          <Route path='/vault' element={<Landing />} />
        </Routes>
      );
    } else if (signUpState == SignUpState.isLoading) {
      return (
        <Routes>
          <Route
            path='/'
            element={
              <Loading
                account={account}
                signAndSubmitTransaction={signAndSubmitTransaction}
                setState={setSignUpState}
                state={SignUpState.showVault}
              />
            }
          />
          <Route path='/vault' element={<Landing />} />
        </Routes>
      );
    } else if (signUpState == SignUpState.showVault) {
      return (
        <Routes>
          <Route path='/' element={<VaultDefault account={account} />} />;
          <Route path='/vault' element={<VaultDefault account={account} />} />;
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path='/' element={<VaultDefault account={account} />} />;
          <Route path='/vault' element={<VaultDefault account={account} />} />;
        </Routes>
      );
    }
  }
}

export default App;
