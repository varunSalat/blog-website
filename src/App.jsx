import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Listing, Article, Update, EditBlog } from "./pages";

// outlet setup

const Elem = (
  <main>
    <Navbar />
    <Outlet />
    <Footer />
  </main>
);

const router = createBrowserRouter([
  {
    basename: "/",
    path: "/",
    element: Elem,
    children: [
      {
        path: "/",
        element: <Listing />,
      },
      {
        path: "/a/:blogUrl",
        element: <Article />,
      },
      {
        path: "/update",
        element: <Update />,
      },
      {
        path: "/e/:blogUrl",
        element: <EditBlog />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
