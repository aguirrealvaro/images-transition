import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/utils/cn";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FunctionComponent<WrapperProps> = ({ children, className }) => {
  return <div className={cn("mx-auto w-[900px]", className)}>{children}</div>;
};

export { Wrapper };
