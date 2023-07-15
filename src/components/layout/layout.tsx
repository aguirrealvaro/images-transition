import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, SourceCode } from "@/components";

const Layout: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SourceCode />
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
