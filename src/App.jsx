import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import MockTests from "./components/Mock"; // ✅ correct import
import Courses from "./components/Courses";
import Reports from "./components/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="main-content">
        <Navbar />
        <div className="pt-20 px-4">
          <Home />
        </div>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="main-content">
        <Navbar />
        <div className="pt-20 px-4">
          <About />
        </div>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div className="main-content">
        <Navbar />
        {/* 🛠 Wrap Dashboard with Outlet for nested children */}
        <div className="pt-20 px-4">
          <Dashboard />
          <Outlet />
        </div>
      </div>
    ),
    children: [
      { path: "courses", element: <Courses /> },
      { path: "mock-tests", element: <MockTests /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/contactus",
    element: (
      <div className="main-content">
        <Navbar />
        <div className="pt-20 px-4">
          <Contact />
        </div>
      </div>
    ),
  },
  {
    path: "/student/:id",
    element: (
      <div className="main-content">
        <Navbar />
        <div className="pt-20 px-4">
          <ParamComp />
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
