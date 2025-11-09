import { Heading } from '@chakra-ui/react';
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
            element: <Heading>Home</Heading>,
            path: paths.home,
          },
        ],
      },
    ],
  },
];
