import Error404 from "@/pages/404";
import Demo from "@/pages/Demo";
import Home from "@/pages/Home";
import MotionDemo from "@/pages/MotionDemo";
import MotionExamples from "@/pages/MotionExamples";
import MotionHome from "@/pages/MotionHome";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/motion",
    element: <MotionHome />,
  },
  {
    path: "/motion-demo",
    element: <MotionDemo />,
  },
  {
    path: "/motion-examples",
    element: <MotionExamples />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
