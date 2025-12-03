import { CardProps } from "@/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ description, image, title }) => {
  return (
    <>
      <div className="px-4 mt-8">
        <p className="text-sm mb-2">{description}</p>
        <a href={title}>{title}</a>
        <Image
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl mt-6"
        />
      </div>
    </>
  );
};
export default Card;
