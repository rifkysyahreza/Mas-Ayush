import { FC } from "react";
import { DUMMY_GALLERY } from "../../../../constants/galleryList";
import GalleryCard from "./components/GalleryCard";

const Index: FC = () => {
  return (
    <div className="flex flex-row gap-10 overflow-x-hidden group">
      {DUMMY_GALLERY.map((gallery, index) => (
        <GalleryCard key={index} {...gallery} />
      ))}
    </div>
  );
};

export default Index;
