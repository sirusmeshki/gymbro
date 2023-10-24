import { FC } from "react";
import Image from "next/image";

import { MoveProps } from "./models";

const Card: FC<MoveProps> = ({
  name,
  effective_muscle,
  image_url,
  isOptionsOpen,
  setIsOptionsOpen,
}) => {
  return (
    <>
      <div
        className="w-full h-full cursor-pointer group"
        onClick={() => setIsOptionsOpen?.(true)}>
        <div className="p-20 shadow-bottom aspect-square">
          <Image
            className="object-contain w-full h-fit"
            src="/icon/arrow.svg"
            alt={`${image_url} poster`}
            width={100}
            height={100}
          />
        </div>
        <footer className="flex items-center justify-between gap-1 px-4 py-6 group-hover:bg-blue-100">
          <h4 className="text-sm font-bold sm:text-sm text-neutral-900">
            {name}
          </h4>
          <h5 className="text-xs font-medium text-neutral-700">
            {effective_muscle}
          </h5>
        </footer>
      </div>
    </>
  );
};

export default Card;
