import { FunctionComponent } from "react";
import { Wrapper } from "@/components";

const imagesKeys = Array.from(Array(5).keys());

const Home: FunctionComponent = () => {
  return (
    <div className="flex h-full items-center">
      <Wrapper>
        <header>
          <div className="mb-12">
            <h1 className="mb-6 text-center text-4xl">All Photos</h1>
            <nav>
              <ul className="flex justify-center gap-4">
                {imagesKeys.map((key) => {
                  const imageKey = key + 1;
                  return (
                    <li key={imageKey} className="text-lg">
                      Photo {imageKey}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </header>
        <div className="flex gap-4">
          {imagesKeys.map((key) => {
            const imageKey = key + 1;
            return (
              <div key={imageKey} className="flex-1   ">
                <img src={`/${imageKey}.jpg`} alt="imagen" className="rounded-sm" />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export { Home };
