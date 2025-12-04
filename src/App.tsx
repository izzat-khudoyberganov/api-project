import { createBrowserRouter, RouterProvider } from "react-router";
import { Category, Home, Layout, NotFound, Product, Products } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "categories/:slug",
                    element: <Category />,
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "product/:id",
                    element: <Product />,
                },
                {
                    path: "*",
                    element: <NotFound />,
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
