import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//         children: [
//             {
//                 path: '/about',
//                 element: <About />
//             },
//             {
//                 path: "",
//                 element: <Home />
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/:userid" element={<AboutMe />} />
    </Route>
  ),
);

export default router;
