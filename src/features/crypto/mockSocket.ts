import { CryptoAsset } from './types';

const getRandom = (base: number, range: number) => base + (Math.random() - 0.5) * range;

export function simulateCryptoUpdates(callback: (assets: CryptoAsset[]) => void) {
  const assets: CryptoAsset[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '/logos/btc.png',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: '19.85M BTC',
      maxSupply: '21M BTC',
      chart: '/charts/btc.webp',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '/logos/eth.png',
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: '120.71M ETH',
      maxSupply: '∞',
      chart: '/charts/eth.webp',
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: '/logos/bnb.png',
      price: 323.42,
      change1h: -0.3,
      change24h: 1.12,
      change7d: 4.78,
      marketCap: 49738127345,
      volume24h: 2139812738,
      circulatingSupply: '153.85M BNB',
      maxSupply: '200M BNB',
      chart: '/charts/bnb.webp',
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      logo: '/logos/sol.png',
      price: 98.25,
      change1h: 0.7,
      change24h: 2.89,
      change7d: 8.12,
      marketCap: 42819273123,
      volume24h: 1738271982,
      circulatingSupply: '424.32M SOL',
      maxSupply: '∞',
      chart: '/charts/sol.webp',
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      logo: '/logos/ada.png',
      price: 0.65,
      change1h: -0.1,
      change24h: 1.8,
      change7d: 5.76,
      marketCap: 22182731891,
      volume24h: 817382173,
      circulatingSupply: '34.85B ADA',
      maxSupply: '45B ADA',
      chart: '/charts/ada.webp',
    },
  ];

  setInterval(() => {
    const updated = assets.map(asset => ({
      ...asset,
      price: getRandom(asset.price, 100),
      change1h: getRandom(asset.change1h, 1),
      change24h: getRandom(asset.change24h, 2),
      change7d: getRandom(asset.change7d, 5),
      volume24h: getRandom(asset.volume24h, 50000000),
    }));
    callback(updated);
  }, 2000);
}
