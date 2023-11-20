import { FC } from "react";
import Image from "next/image";

import { InfoProps } from "./models";

const Info: FC<InfoProps> = ({ name, effective_muscle, image_url }) => {
  return (
    <div className="flex items-center h-full min-w-full border-top">
      <div className="h-full p-1 aspect-square">
        <Image
          className="object-contain w-full h-full"
          src="/icon/arrow.svg"
          alt={`${image_url} poster`}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col w-full h-full px-2 py-3">
        <h4 className="text-sm font-bold text-neutral-900">{name}</h4>
        <h5 className="text-xs font-medium text-neutral-700">
          {effective_muscle}
        </h5>
      </div>
    </div>
  );
};

export default Info;
