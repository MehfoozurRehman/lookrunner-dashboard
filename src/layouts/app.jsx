import { Header, Sidebar } from "components";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAtom } from "jotai";
import { useEffect } from "react";
import { userAtom } from "../global";

export default function App() {
  const location = useLocation();
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();
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
  console.log(user);
  return (
    <>
      {!location.pathname.toLowerCase().includes("/dashboard") ? (
        <Outlet />
      ) : (
        <div className="container">
          <Sidebar />
          <div className="container__main">
            <Header />
            <div className="container__main__content">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
