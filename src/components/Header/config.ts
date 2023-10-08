import { ROUTES } from 'config/routes';

type Links = {
  url: string;
  label: string;
};

export type addActiveLinkClass = {
  isActive: boolean;
  isPending: boolean;
};

export const linksForUser: Links[] = [
  { url: ROUTES.favoriteQuizes.mask, label: 'Fav Quizes' },
  { url: ROUTES.userStatistic.mask, label: 'Statistic' },
  { url: ROUTES.profile.mask, label: 'Profile' },
];
