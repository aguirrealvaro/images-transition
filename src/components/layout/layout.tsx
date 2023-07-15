import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, SourceCode } from "@/components";

const Layout: FunctionComponent = () => {
  return (
    <div className="flex h-screen flex-col">
      <SourceCode />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
