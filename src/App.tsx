import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Loading from './pages/Loading';
import { VaultDefault } from './pages/VaultDefault';
import SubscribeDefault from './pages/SubscribeDefault';
import SSO from './pages/SSO';
import SkeletonOption from './pages/SkeletonOption';
import LimitDefaultContent from './pages/LimitDefault';
import { useEffect, useState } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import '@aptos-labs/wallet-adapter-ant-design/dist/index.css';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const { account, signAndSubmitTransaction } = useWallet();
  const [isSsoLogin, setIsSsoLogin] = useState(false);

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  if (!isSsoLogin || account == null) {
    return (
      <Routes>
        <Route
          path='/'
          element={<Landing account={account} setIsSsoLogin={setIsSsoLogin} />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='/' element={<VaultDefault account={account} />} />
      </Routes>
    );
  }
}
export default App;
