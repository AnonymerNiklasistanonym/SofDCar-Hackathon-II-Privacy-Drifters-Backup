import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../components/FirstPage";
import App from "../App";
import SecondPage from "../components/SecondPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/secondpage",
    element: <SecondPage />,
  },
  {
    // This is the catch-all route for unmatched URLs, which redirects to the home page.
    path: "*",
    element: <FirstPage />,
  },
]);
