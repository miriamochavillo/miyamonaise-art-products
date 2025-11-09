import { routes } from '@app/routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);

export const ReactRouterDomProvider = () => {
  return <RouterProvider router={router} />;
};
