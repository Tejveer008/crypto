import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from './app/store';
import { updateAssets } from './features/crypto/cryptoSlice';
import { simulateCryptoUpdates } from './features/crypto/mockSocket';
import CryptoTable from './features/crypto/CryptoTable';
import { useAppDispatch } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    simulateCryptoUpdates((data) => {
      dispatch(updateAssets(data));
    });
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl text-center font-bold py-6">🪙 Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
