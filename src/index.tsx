import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from 'store/store';

import RouterPage from './Router/RouterPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterPage />
    </Provider>
  </StrictMode>,
);
