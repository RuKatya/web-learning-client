import classnames from 'classnames';

import Layout from 'components/Layout';

import css from './Burger.module.scss';

type BurgerProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

const Burger = ({ isOpen, toggleIsOpen }: BurgerProps) => {
  const cnBurgerButton = classnames(css.burger__button, isOpen && css.open);

  return (
    <div className={css.burger__wrapper}>
      <div className={css.burger}>
        <div className={cnBurgerButton} onClick={toggleIsOpen}>
          <div className={css.burger__lines} />
        </div>
      </div>

      <Layout toggleIsOpen={toggleIsOpen} isOpen={isOpen} />
    </div>
  );
};
export default Burger;
