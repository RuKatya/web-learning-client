export type UserRole = 'user' | 'admin';
export type Status = 'idle' | 'loading' | 'failed';
export type Subjects = 'CSS' | 'HTML' | 'JavaScript';

export type Subject = {
  SubjectID: number;
  SubjectName: string;
};

export type SubjectModel = {
  subjectID: number;
  subjectName: string;
};

export type SubjectsState = {
  subjects: SubjectModel[];
  status: Status;
  message: string;
  continueWork: boolean;
};

export interface IUser {
  isLogin: boolean;
  userName: string;
  userRole: UserRole;
}

export interface IAuthState {
  user: IUser;
  status: Status;
  message: string;
  continueWork: boolean;
}
