import { flushSync } from "react-dom";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "@/components";

const imagesKeys = Array.from(Array(5).keys());

const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed inset-x-0 my-12">
      <Wrapper>
        <div className=" flex w-full flex-col items-center justify-center">
          <h1 className="mb-6 text-3xl text-text-heading">
            <a
              className="hover:text-blue-600"
              href={"/"}
              onClick={(ev) => {
                ev.preventDefault();
                //@ts-ignore
                document.startViewTransition(() => {
                  flushSync(() => {
                    navigate("/");
                  });
                });
              }}
            >
              All Photos
            </a>
          </h1>
          <nav>
            <ul className="flex gap-4">
              {imagesKeys.map((key) => {
                const imageKey = key + 1;
                return (
                  <li key={imageKey} className="text-lg">
                    <a
                      href={`${imageKey}`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        //@ts-ignore
                        document.startViewTransition(() => {
                          flushSync(() => {
                            navigate(`${imageKey}`);
                          });
                        });
                      }}
                      className="hover:text-blue-600"
                    >
                      Photo {imageKey}
                    </a>
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
