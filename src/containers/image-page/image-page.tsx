import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "@/components";

const ImagePage: FunctionComponent = () => {
  const { image } = useParams<{ image: string }>();

  return (
    <div className="flex h-full items-center">
      <Wrapper>
        <div className="flex gap-12">
          <div className="flex-1">
            <img
              src={`/${image}.jpg`}
              alt="imagen"
              className="rounded-lg shadow-2xl"
              //@ts-ignore
              style={{ viewTransitionName: `image-${image}` }}
            />
          </div>
          <div className="flex flex-1 items-center">
            <p className="text-text-secondary">
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
