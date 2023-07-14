import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "@/components";

const imagesKeys = Array.from(Array(5).keys());

const Header: FunctionComponent = () => {
  return (
    <header className="fixed inset-x-0 my-12">
      <Wrapper>
        <div className=" flex w-full flex-col items-center justify-center">
          <h1 className="mb-6 text-3xl text-text-heading">
            <Link to="/" className="hover:text-blue-600">
              All Photos
            </Link>
          </h1>
          <nav>
            <ul className="flex gap-4">
              {imagesKeys.map((key) => {
                const imageKey = key + 1;
                return (
                  <li key={imageKey} className="text-lg">
                    <Link to={`${imageKey}`} className="hover:text-blue-600">
                      Photo {imageKey}
                    </Link>
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
