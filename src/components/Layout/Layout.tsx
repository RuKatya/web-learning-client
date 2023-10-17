import classnames from 'classnames';
import { MouseEvent, PropsWithChildren } from 'react';
import css from './Layout.module.scss';

type LayoutProps = {
  isOpen: boolean;
  toggleIsOpen?: (event: MouseEvent<HTMLDivElement>) => void;
} & PropsWithChildren;

const Layout = ({ isOpen, toggleIsOpen, children }: LayoutProps) => {
  const cnLayoutButton = classnames(css.layout, isOpen && css.open);

  const handle = (e: MouseEvent<HTMLInputElement>) => {
    const elem = e.target as Element;
    if (elem.classList.contains(css.layout)) {
      toggleIsOpen && toggleIsOpen(e);
    }
  };

  return (
    <div onClick={handle} className={cnLayoutButton}>
      {children}
    </div>
  );
};
export default Layout;
