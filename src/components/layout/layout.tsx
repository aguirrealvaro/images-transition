import { FunctionComponent, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
};

export { Layout };
