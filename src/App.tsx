import { createBrowserRouter, RouterProvider } from "react-router";
import { Category, Home, Layout, NotFound, Product } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient();

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
          path: "categories/:params",
          Component: Category,
        },
        {
          path: "*",
          Component: NotFound,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />;
    </QueryClientProvider>
  );
}

export default App;
