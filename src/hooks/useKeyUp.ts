import { useEffect } from 'react';
import { handleKeyEscape } from 'utils/keyDown';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const useKeyUp = (callback: () => void = () => {}): void => {
  useEffect(() => {
    document.addEventListener('keyup', (e) => handleKeyEscape(e, callback, 'Escape'));

    return () => document.addEventListener('keyup', (e) => handleKeyEscape(e, callback, 'Escape'));
  }, []);
};
export default useKeyUp;
