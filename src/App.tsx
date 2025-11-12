import "./App.css";
import { Category, Home, Layout, NotFound, Product } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "products/:id",
          Component: Product,
        },
        {
          path: "categories",
          Component: Category,
        },
        {
          path: "*",
          Component: NotFound ,
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
