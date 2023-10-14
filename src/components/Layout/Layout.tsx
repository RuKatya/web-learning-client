import classnames from 'classnames';
import { PropsWithChildren } from 'react';
import css from './Layout.module.scss';

type LayoutProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
} & PropsWithChildren;

const Layout = ({ children, isOpen, toggleIsOpen }: LayoutProps) => {
  const cnLayoutButton = classnames(css.layout, isOpen && css.open);

  return (
    <div onClick={toggleIsOpen} className={cnLayoutButton}>
      {children}
    </div>
  );
};
export default Layout;
