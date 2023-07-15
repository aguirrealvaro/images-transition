import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "@/components";
import { cn } from "@/utils/cn";

const ImagePage: FunctionComponent = () => {
  const { image } = useParams<{ image: string }>();

  const isEven = image ? parseInt(image) % 2 === 1 : false;

  return (
    <div className="flex flex-1 items-center">
      <Wrapper>
        <div className={cn("flex gap-12", isEven ? "flex-row" : "flex-col")}>
          <div className="flex-1">
            <img
              src={`/${image}.jpg`}
              alt="imagen"
              className={cn(
                "animate-fade-in rounded-lg shadow-2xl",
                isEven ? "" : "mx-auto w-1/2"
              )}
              //@ts-ignore
              style={{ viewTransitionName: `image-${image}` }}
            />
          </div>
          <div className="flex flex-1 items-center">
            <p
              className="text-text-secondary"
              //@ts-ignore
              style={{ viewTransitionName: `paragraph` }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod reiciendis
              rerum, alias voluptas distinctio quibusdam dicta, accusamus aut vel provident,
              magnam animi molestiae saepe at a repellendus porro adipisci.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export { ImagePage };
