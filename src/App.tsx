import { createBrowserRouter, RouterProvider } from "react-router";
import { Category, Home, Layout, NotFound, Product, Products } from "./pages";
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
          path: "categories/:slug",
          Component: Category,
        },
        {
          path: "products",
          Component: Products,
        },
        {
          path: "product/:id",
          Component: Product,
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
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
