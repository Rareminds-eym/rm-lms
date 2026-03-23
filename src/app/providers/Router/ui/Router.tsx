import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/widgets/layout';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
