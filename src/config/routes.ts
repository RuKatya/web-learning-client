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
