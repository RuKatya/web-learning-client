import 'styles/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Router from 'app/Router';
import Providers from 'providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>,
);
