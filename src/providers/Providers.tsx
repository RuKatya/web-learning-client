import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import ThemeProvider from './theme/ThemeProvider';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
export default Providers;
