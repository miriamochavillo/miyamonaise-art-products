import { paths } from '@shared/paths';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    ErrorBoundary: () => null,
    children: [
      {
        element: 'Homepage',
        path: paths.home,
      },
    ],
  },
];
