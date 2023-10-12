export const ROUTES = {
  home: {
    mask: '/',
  },
  auth: {
    mask: '/auth',
    saveUser: {
      mask: '/auth/save-user',
    },
    regUser: {
      mask: '/auth/registration-user',
    },
    loginUser: {
      mask: '/auth/login-user',
    },
    logoutUser: {
      mask: '/auth/user-logout',
    },
    userChecking: {
      mask: '/auth/user-checking',
    },
  },
  profile: {
    mask: 'user-profile',
  },
  dashboard: {
    mask: 'admin-dashboard',
  },
  favoriteQuizes: {
    mask: 'user-save-quizes',
  },
  userStatistic: {
    mask: 'user-statistic',
  },
  error: {
    mask: '*',
  },
};
