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
    mask: 'user-profile',
  },
  dashboard: {
    mask: 'admin-dashboard',
  },
  favQuizes: {
    mask: 'user-save-quizes',
  },
  statistic: {
    mask: 'user-statistic',
  },
  error: {
    mask: '*',
  },
};
