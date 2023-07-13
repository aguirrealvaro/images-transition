import { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import "@/styles/globals.css";
import { Layout, Wrapper } from "@/components";

const IMAGE_LENGTH = 5;
const imagesKeys = Array.from(Array(IMAGE_LENGTH).keys());

const App: FunctionComponent = () => {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.offsetWidth);
  }, []);

  const imageWidth = containerWidth / IMAGE_LENGTH;

  return (
    <Layout>
      <div className="flex h-full items-center">
        <Wrapper>
          <div className="flex" ref={containerRef}>
            {imagesKeys.map((key) => {
              return (
                <img
                  src={`/${key + 1}.jpg`}
                  alt="imagen"
                  key={key}
                  style={{ width: `${imageWidth}px` }}
                />
              );
            })}
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default App;
