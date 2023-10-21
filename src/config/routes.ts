export const ROUTES = {
  home: {
    mask: '/',
  },
  auth: {
    mask: '/auth',
    saveUser: {
      mask: '/auth/save-user',
    },
    loginUser: {
      mask: '/auth/login-user',
    },
    logoutUser: {
      mask: '/auth/logout-user',
    },
    checkUser: {
      mask: '/auth/check-user',
    },
  },
  profile: {
    mask: '/user-profile',
  },
  dashboard: {
    mask: '/dashboard',
    subjects: {
      mask: '/dashboard/subjects/get-all-subjects',
      addSubject: {
        mask: '/dashboard/subjects/save-new-subject',
      },
      deleteSubject: {
        mask: '/dashboard/subjects/delete-subject',
        // .delete('/delete-subject', removeSubject);  // Remove Subject
      },
      refreshSubject: {
        mask: '/dashboard/subjects/update-subject',
        // .patch('/update-subject', updateSubject);
      },
    },
  },
  favQuizes: {
    mask: 'save-user-quizes',
  },
  statistic: {
    mask: 'user-statistic',
  },
  error: {
    mask: '*',
  },
};
