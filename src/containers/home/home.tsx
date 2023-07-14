import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "@/components";

const imagesKeys = Array.from(Array(5).keys());

const Home: FunctionComponent = () => {
  return (
    <div className="flex h-full items-center">
      <Wrapper>
        <div className="flex gap-2">
          {imagesKeys.map((key) => {
            const imageKey = key + 1;
            return (
              <Link
                to={`${imageKey}`}
                key={imageKey}
                className="flex-1 transition-flex duration-300 ease-in hover:flex-1.5"
              >
                <img
                  src={`/${imageKey}.jpg`}
                  alt="imagen"
                  className="h-96 rounded-sm object-cover"
                />
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export { Home };
