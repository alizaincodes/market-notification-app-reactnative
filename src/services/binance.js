/**
 * Simple Binance combined-stream WebSocket wrapper for React Native.
 * Uses the global WebSocket available in React Native.
 * This is a light skeleton — it emits price updates via a callback.
 */

export default function BinanceSocket(assets = []) {
  // assets: array of lowercase symbols, e.g. ['btcusdt','ethusdt']
  let ws = null;
  const listeners = [];

  function onPrice(cb) {
    listeners.push(cb);
  }

  function emitPrice(symbol, price) {
    listeners.forEach(cb => {
      try {
        cb(symbol, price);
      } catch (e) {
        // ignore listener errors
      }
    });
  }

  function connect() {
    if (!assets || assets.length === 0) return;
    const streams = assets.map(a => `${a}@aggTrade`).join('/');
    const url = `wss://fstream.binance.com/stream?streams=${streams}`;
    ws = new WebSocket(url);

    ws.onopen = () => {
      console.log('Binance socket opened', url);
    };

    ws.onmessage = e => {
      try {
        const data = JSON.parse(e.data);
        // combined streams wrap message in data
        const priceData = data.data || data;
        // price is in p, symbol is s
        if (priceData && priceData.s && priceData.p) {
          const symbol = priceData.s.toLowerCase();
          const price = priceData.p;
          emitPrice(symbol, price);
        }
      } catch (err) {
        // ignore parse errors
      }
    };

    ws.onerror = e => {
      console.warn('Binance socket error', e.message || e);
      // TODO: consider reconnection strategy
    };

    ws.onclose = () => {
      console.log('Binance socket closed');
    };
  }

  function disconnect() {
    if (ws) {
      ws.close();
      ws = null;
    }
  }

  return {connect, disconnect, onPrice};
}
