import React from 'react';
import ReactDOM from 'react-dom/client';

//Import Paginas
import App from "./App.jsx";
import Home from "./routes/home/home.jsx";
import Pagar from "./routes/Pagar/Pagar.jsx"
import Error from './routes/Error/Error.jsx';
import Transferir from './routes/Transferir/Transferir.jsx';
import Recarga from './routes/Recarga/Recarga.jsx';
import Deposito from './routes/Deposito/Deposito.jsx';
import Sacar from './routes/Sacar/Sacar.jsx';

//cofigurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "pagar",
        element: <Pagar />
      },
      {
        path: "transferir",
        element: <Transferir />
      },
      {
        path: "recarga",
        element: <Recarga />
      },
      {
        path: "deposito",
        element: <Deposito />
      },
      {
        path: "sacar",
        element: <Sacar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}
    />
  </React.StrictMode>,
)
