import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/root/root.tsx';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/variables.css';
import { InvoiceId } from './routes/invoiceId/InvoiceId.tsx';
import { StatusPage } from './routes/status/StatusPage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <>Index</>
  },
  {
    path: ":id",
    element: <Root />,
    children: [
      {
        path: '',
        element: <InvoiceId />
      },
      {
        path: 'status',
        element: <StatusPage />
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={router} />

    {/* <App /> */}
  </StrictMode>,
)
