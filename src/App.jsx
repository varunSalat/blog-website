import { Suspense, lazy } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// pages
import { Footer, Navbar } from "./components";
const Listing = lazy(() => import("./pages/Listing"));
const Article = lazy(() => import("./pages/Article"));
const Update = lazy(() => import("./pages/Update"));
const EditBlog = lazy(() => import("./pages/EditBlog"));

import ScrollToTopButton from "./components/ScrollTopBtn";
const TermsCondition = lazy(() => import("./pages/TermsCondition"));
import Loader from "./layouts/Loader";
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

// outlet setup

const Layout = (
  <main>
    <Navbar />
    <ScrollToTopButton />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    <Footer />
  </main>
);

const router = createBrowserRouter([
  {
    basename: "/",
    path: "/",
    element: Layout,
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
      {
        path: "/term-condition",
        element: <TermsCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
