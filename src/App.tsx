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
  const imageWidthWithHover = imageWidth + (imageWidth * 66) / 100;

  const [hoverElement, setHoverElement] = useState<number | undefined>(undefined);

  console.log(hoverElement);
  console.log({ containerWidth, imageWidth, imageWidthWithHover });

  const getImageWidth = (key: number) => {
    const width = hoverElement === key ? imageWidthWithHover : imageWidth;
    return `${width}px`;
  };

  return (
    <Layout>
      <div className="flex h-full items-center">
        <Wrapper>
          <div className="flex" ref={containerRef}>
            {imagesKeys.map((key) => {
              const imageKey = key + 1;
              return (
                <img
                  src={`/${imageKey}.jpg`}
                  alt="imagen"
                  key={imageKey}
                  style={{ width: getImageWidth(imageKey) }}
                  onMouseEnter={() => setHoverElement(imageKey)}
                  onMouseLeave={() => setHoverElement(undefined)}
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
