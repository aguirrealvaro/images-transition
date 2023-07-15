import { flushSync } from "react-dom";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "@/components";
import { cn } from "@/utils/cn";

const imagesKeys = Array.from(Array(5).keys());

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 items-center">
      <Wrapper>
        <div className="flex gap-2 md:flex-col">
          {imagesKeys.map((key) => {
            const imageKey = key + 1;
            return (
              <a
                href={`${imageKey}`}
                key={imageKey}
                className="flex-1 transition-flex duration-300 ease-in hover:flex-1.5"
                onClick={(ev) => {
                  ev.preventDefault();
                  //@ts-ignore
                  document.startViewTransition(() => {
                    flushSync(() => {
                      navigate(`${imageKey}`);
                    });
                  });
                }}
              >
                <img
                  src={`/${imageKey}.jpg`}
                  alt="imagen"
                  className={cn(
                    "h-96 rounded-sm object-cover",
                    "md:h-36 md:w-full md:transition-height md:duration-300 md:hover:h-52"
                  )}
                  //@ts-ignore
                  style={{ viewTransitionName: `image-${imageKey}` }}
                />
              </a>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export { Home };
