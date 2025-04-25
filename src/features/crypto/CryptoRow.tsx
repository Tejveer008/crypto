import { CryptoAsset } from './types';

const format = (num: number) => Intl.NumberFormat().format(num);

const CryptoRow = ({ asset, index }: { asset: CryptoAsset; index: number }) => (
  <tr className="text-center border-b hover:bg-gray-50">
    <td>{index}</td>
    <td><td>
  <img src={asset.logo} alt={asset.name} className="w-8 h-8 mx-auto" />
</td>
</td>
    <td>{asset.name}</td>
    <td>{asset.symbol}</td>
    <td>${format(asset.price)}</td>
    <td className={asset.change1h >= 0 ? 'text-green-600' : 'text-red-500'}>
      {asset.change1h.toFixed(2)}%
    </td>
    <td className={asset.change24h >= 0 ? 'text-green-600' : 'text-red-500'}>
      {asset.change24h.toFixed(2)}%
    </td>
    <td className={asset.change7d >= 0 ? 'text-green-600' : 'text-red-500'}>
      {asset.change7d.toFixed(2)}%
    </td>
    <td>${format(asset.marketCap)}</td>
    <td>${format(asset.volume24h)}</td>
    <td>{asset.circulatingSupply}</td>
    <td>{asset.maxSupply}</td>
    <td><img src={asset.chart} alt={asset.symbol} className="w-12 h-12 inline-block" />
    </td>
  </tr>
);

export default CryptoRow;
