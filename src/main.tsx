import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hide loading screen and reveal app smoothly after React mounts
requestAnimationFrame(() => {
  const loader = document.getElementById('app-loader');
  const rootEl = document.getElementById('root');
  if (rootEl) rootEl.classList.add('app-ready');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 450);
  }
});
