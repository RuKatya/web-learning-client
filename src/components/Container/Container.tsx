import { FC, PropsWithChildren } from 'react';
import css from './Container.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => <div className={css.container}>{children}</div>;

export default Container;
