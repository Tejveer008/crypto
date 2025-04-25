import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset } from './types';

interface State {
  assets: CryptoAsset[];
}

const initialState: State = {
  assets: [], // will update from simulation
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
