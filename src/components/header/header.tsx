import { FunctionComponent } from "react";
import { Wrapper } from "@/components";

const imagesKeys = Array.from(Array(5).keys());

const Header: FunctionComponent = () => {
  return (
    <header className="fixed inset-x-0 my-12">
      <Wrapper>
        <div className=" flex w-full flex-col items-center justify-center">
          <h1 className=" mb-6 text-4xl">All Photos</h1>
          <nav>
            <ul className="flex  gap-4">
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
      </Wrapper>
    </header>
  );
};

export { Header };
