import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Listing, Article, Update } from "./pages";

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
    path: "/",
    element: Elem,
    children: [
      {
        path: "/",
        element: <Listing />,
      },
      {
        path: "/a",
        element: <Article />,
      },
      {
        path: "/update",
        element: <Update />,
      },
    ],
  },
]);

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" >
//     <Route index element={<Listing/>}/>
//     <Route path="a" element={<Article/>}/>
//     <Route path="update" element={<Update/>}/>
//   </Route>
// ));



function App() {
  return <RouterProvider router={router} />;
}

export default App;
