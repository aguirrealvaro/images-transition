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
              <Link to={`${imageKey}`} key={imageKey} className="flex-1">
                <img src={`/${imageKey}.jpg`} alt="imagen" className="rounded-sm" />
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export { Home };
