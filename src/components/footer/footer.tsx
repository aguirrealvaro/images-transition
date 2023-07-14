import { FunctionComponent } from "react";
import { Wrapper } from "@/components";

const Footer: FunctionComponent = () => {
  return (
    <footer className="py-10">
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-text-secondary">
          <p>
            Created by{" "}
            <a
              href="https://www.aguirrealvaro.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Alvaro Aguirre
            </a>{" "}
            with React, Tailwind and{" "}
            <a
              href="https://developer.chrome.com/docs/web-platform/view-transitions/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View Transitions API
            </a>
          </p>
          <p>
            Clone of{" "}
            <a
              href="https://shu-gallery.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://shu-gallery.vercel.app
            </a>{" "}
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export { Footer };
