import { FunctionComponent } from "react";
import "@/styles/globals.css";
import { Layout, Wrapper } from "@/components";

const IMAGE_LENGTH = 5;
const imagesKeys = Array.from(Array(IMAGE_LENGTH).keys());

const App: FunctionComponent = () => {
  return (
    <Layout>
      <div className="flex h-full items-center">
        <Wrapper>
          <div className="flex gap-4">
            {imagesKeys.map((key) => {
              const imageKey = key + 1;
              return (
                <div key={imageKey} className="flex-1   ">
                  <img src={`/${imageKey}.jpg`} alt="imagen" />
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default App;
