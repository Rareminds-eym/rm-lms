import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

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
