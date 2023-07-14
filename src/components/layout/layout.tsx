import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent = () => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export { Layout };
