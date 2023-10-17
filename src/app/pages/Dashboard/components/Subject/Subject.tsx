import { Link } from 'react-router-dom';

import Button from 'components/Button';

import css from './Subject.module.scss';

type SubjectProps = {
  subjectID: number;
  subjectName: string;
  handleDelete: () => void;
  // onClickRefresh: () => void;
};

const Subject = ({ subjectID, subjectName, handleDelete }: SubjectProps) => {
  return (
    <li id={String(subjectID)} className={css.subject__item}>
      <Link to="#" className={css.subject__link}>
        <h2 className={css.subject__name}>{subjectName}</h2>
      </Link>
      <Button
        //  onClick={handleDelete(el.subjectID)}
        size="xl"
        position="center"
        onClick={handleDelete}
        className={css.subject__delete}
      >
        DELETE
      </Button>
      <Button
        //  onClick={handleDelete(el.subjectID)}
        size="xl"
        position="center"
        // onClick={onClickRefresh}
        className={css.subject__refresh}
      >
        REFRESH
      </Button>
    </li>
  );
};
export default Subject;
