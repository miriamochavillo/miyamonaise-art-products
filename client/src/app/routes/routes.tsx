import { DashboardContainer } from '@pages/dashboard';
import { paths } from '@shared/paths';
import { MainLayout } from '@shared/ui';
import { Outlet, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    ErrorBoundary: () => null,
    children: [
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            element: <DashboardContainer />,
            path: paths.dashboard,
          },
          {
            element: '  Canvas',
            path: paths.canvas,
          },
          {
            element: 'Tote Bags',
            path: paths.toteBags,
          },
          {
            element: 'Watercolor',
            path: paths.watercolor,
          },
          {
            element: 'Digital',
            path: paths.digital,
          },
          {
            element: 'Merch',
            path: paths.merch,
          },
        ],
      },
    ],
  },
];
