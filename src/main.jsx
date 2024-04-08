import React from 'react';
import ReactDOM from 'react-dom/client';

//Import Paginas
import App from "./App.jsx";
import Home from "./routes/home/home.jsx";
import Pagar from "./routes/Pagar/Pagar.jsx"
import Error from './routes/Error/Error.jsx';

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
        path: "Pagar",
        element: <Pagar />
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
