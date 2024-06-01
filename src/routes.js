import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ResturantInfo from "./components/ResturantInfo";
import { lazy, Suspense } from "react";

const Instamart = lazy(() => import('./components/Instamart'))

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <AboutUs />,
        errorElement: <ErrorPage />
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/resInfo/:resId',
        element: <ResturantInfo />
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<h1>Lazy load....</h1>}>
            <Instamart />
          </Suspense>
        )
      }
    ]
  }
])