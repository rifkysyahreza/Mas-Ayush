import { FC } from "react";

interface GalleryCardProps {
  name: string;
  link: string;
  image: string;
}

const GalleryCardToLeft: FC<GalleryCardProps> = ({ name, link, image }) => {
  return (
    <div className="flex flex-col gap-10 shrink-0">
      <div className=" px-12 py-14 shrink-0 bg-[#C7D0D9] animate-infinite-scroll group-hover:paused hover:drop-shadow-xl">
        <a href={link}>
          <img src={image} alt={name} className=" w-80 h-48 object-cover" />
          <a
            className="invisible group-hover:visible font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md px-4 py-3 border border-black"
            href={link}
          >
            Visit the website
          </a>
        </a>
      </div>

      <div className="px-12 py-14 bg-[#C7D0D9] shrink-0  animate-infinite-scroll-reverse group-hover:paused hover:drop-shadow-xl">
        <a href={link}>
          <img src={image} alt={name} className=" w-80 h-48 object-cover" />
          <a
            className="invisible group-hover:visible font-medium absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md px-4 py-3 border border-black"
            href={link}
          >
            Visit the website
          </a>
        </a>
      </div>
    </div>
  );
};

export default GalleryCardToLeft;
