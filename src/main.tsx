import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PrivacyPolicy from './PrivacyPolicy.tsx';
import './index.css';

const isPrivacyPolicyRoute = window.location.pathname.replace(/\/+$/, '') === '/politica-de-privacidad';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPrivacyPolicyRoute ? <PrivacyPolicy /> : <App />}
  </StrictMode>
);
