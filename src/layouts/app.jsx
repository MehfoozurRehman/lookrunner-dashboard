import { Header, Sidebar } from "components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAtom } from "jotai";
import { userAtom } from "global";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();
  function toggleSidebar() {
    if (window.innerWidth <= 820) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }
  useEffect(() => {
    toggleSidebar();
    window.addEventListener("resize", toggleSidebar);
  }, []);

  useEffect(() => {
    if (
      user === null &&
      location.pathname.toLowerCase().includes("/dashboard")
    ) {
      navigate("/", { replace: true });
    }
    if (user !== null && location.pathname === "/") {
      navigate("/dashboard", { replace: true });
    }
  }, [location]);

  return (
    <>
      {!location.pathname.toLowerCase().includes("/dashboard") ? (
        <Outlet />
      ) : (
        <div className="container">
          {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
          <div className="container__main">
            <Header setSidebarOpen={setSidebarOpen} />
            <div className="container__main__content">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
