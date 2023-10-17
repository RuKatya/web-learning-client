import { forwardRef, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

import css from './Subject.module.scss';

type SubjectProps = {
  subjectID: number;
  subjectName: string;
  handleDelete: () => void;
  handleRefresh: () => void;
  handleEditClose: () => void;
  handleUpdateSubject: ((e: MouseEvent<HTMLButtonElement>) => void) | undefined;
};

const Subject = forwardRef<HTMLInputElement, SubjectProps>(
  ({ subjectID, subjectName, handleDelete, handleRefresh, handleUpdateSubject, handleEditClose }, ref) => {
    // Подумать показывать ли текст или нет
    // const [isTouched, setTouched] = useState(false);
    return (
      <li id={String(subjectID)} className={css.subject__item}>
        <Link to="#" className={css.subject__link}>
          <h2 className={css.subject__name}>{subjectName}</h2>
          {handleUpdateSubject && (
            <div style={{ display: 'flex', gap: 8, backgroundColor: 'green' }}>
              <Button onClick={handleUpdateSubject} size="xl" position="center">
                Update
              </Button>
              <input
                ref={ref}
                type="text"
                // value={isTouched ? subjectName : value}
                // onChange={(e) => {
                //   setTouched(true);
                //   onChangeEdit(e);
                // }}
              />
              <Button onClick={handleEditClose} size="xl" position="center">
                Close
              </Button>
            </div>
          )}
        </Link>
        <Button size="xl" position="center" onClick={handleDelete} className={css.subject__delete}>
          DELETE
        </Button>
        <Button onClick={handleRefresh} size="xl" position="center" className={css.subject__refresh}>
          REFRESH
        </Button>
      </li>
    );
  },
);

Subject.displayName = 'Subject';

export default Subject;
