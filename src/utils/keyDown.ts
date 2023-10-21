export const handleKeyEscape = (e: KeyboardEvent, callback: (() => void) | undefined, key: string) => {
  if (e.code === key) {
    callback && callback();
  }
};
