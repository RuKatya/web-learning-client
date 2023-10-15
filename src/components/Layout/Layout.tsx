import classnames from 'classnames';
import css from './Layout.module.scss';

type LayoutProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

const Layout = ({ isOpen, toggleIsOpen }: LayoutProps) => {
  const cnLayoutButton = classnames(css.layout, isOpen && css.open);

  return <div onClick={toggleIsOpen} className={cnLayoutButton} />;
};
export default Layout;
