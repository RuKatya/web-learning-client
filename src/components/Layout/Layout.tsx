import classnames from 'classnames';
import { PropsWithChildren } from 'react';
import css from './Layout.module.scss';

type LayoutProps = {
  isOpen: boolean;
} & PropsWithChildren;

const Layout = ({ children, isOpen }: LayoutProps) => {
  const cnLayoutButton = classnames(css.layout, isOpen && css.open);

  return <div className={cnLayoutButton}>{children}</div>;
};
export default Layout;
