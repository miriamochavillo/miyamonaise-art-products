import { Heading } from '@chakra-ui/react';
import { paths } from '@shared/paths';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    ErrorBoundary: () => null,
    children: [
      {
        element: <Heading>Homepage</Heading>,
        path: paths.home,
      },
    ],
  },
];
