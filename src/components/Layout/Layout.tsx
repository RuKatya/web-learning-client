import classnames from 'classnames';
import { MouseEvent, PropsWithChildren } from 'react';
import css from './Layout.module.scss';

type LayoutProps = {
  isOpen: boolean;
  toggleIsOpen?: (event: MouseEvent<HTMLDivElement>) => void;
} & PropsWithChildren;

const Layout = ({ isOpen, toggleIsOpen, children }: LayoutProps) => {
  const cnLayoutButton = classnames(css.layout, isOpen && css.open);

  return (
    <div onClick={toggleIsOpen} className={cnLayoutButton}>
      {children}
    </div>
  );
};
export default Layout;
