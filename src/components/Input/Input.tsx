import css from './Input.module.scss';

const Input = () => {
  return (
    <div className={css.inputWrapper}>
      Input
      <input className={css.input} type="text" />
      <div className={css.error}>error</div>
    </div>
  );
};
export default Input;
