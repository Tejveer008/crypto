import { useSelector } from 'react-redux';
import { useState } from 'react';
import { RootState } from '../../app/store';
import CryptoRow from './CryptoRow';
import { CryptoAsset } from './types';

const CryptoTable = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);
  const [filter, setFilter] = useState<'all' | 'gainers' | 'losers'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'marketCap' | null>(null);

  // Filter logic
  let filteredAssets: CryptoAsset[] = [...assets];
  if (filter === 'gainers') {
    filteredAssets = filteredAssets.sort((a, b) => b.change24h - a.change24h).slice(0, 3);
  } else if (filter === 'losers') {
    filteredAssets = filteredAssets.sort((a, b) => a.change24h - b.change24h).slice(0, 3);
  }

  // Sorting logic
  if (sortBy === 'price') {
    filteredAssets = [...filteredAssets].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'marketCap') {
    filteredAssets = [...filteredAssets].sort((a, b) => b.marketCap - a.marketCap);
  }

  return (
    <div className="p-4">
      {/* Filter + Sort Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="space-x-2">
          <button
            className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className="bg-green-200 hover:bg-green-300 px-3 py-1 rounded"
            onClick={() => setFilter('gainers')}
          >
            Top Gainers
          </button>
          <button
            className="bg-red-200 hover:bg-red-300 px-3 py-1 rounded"
            onClick={() => setFilter('losers')}
          >
            Top Losers
          </button>
        </div>

        <div className="space-x-2">
          <button
            className="bg-blue-200 hover:bg-blue-300 px-3 py-1 rounded"
            onClick={() => setSortBy('price')}
          >
            Sort by Price
          </button>
          <button
            className="bg-purple-200 hover:bg-purple-300 px-3 py-1 rounded"
            onClick={() => setSortBy('marketCap')}
          >
            Sort by Market Cap
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm md:text-base border">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th>#</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Symbol</th>
              <th className="cursor-pointer" onClick={() => setSortBy('price')}>Price ⬍</th>
              <th>1h %</th>
              <th className="cursor-pointer" onClick={() => setSortBy('marketCap')}>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, idx) => (
              <CryptoRow key={asset.symbol} asset={asset} index={idx + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
