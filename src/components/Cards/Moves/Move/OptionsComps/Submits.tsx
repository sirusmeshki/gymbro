import { FC } from "react";
import Image from "next/image";

import Button from "@/components/Button";

const Submits: FC = () => {
  return (
    <div className="flex min-h-[68px]">
      <Button
        cta="افزودن"
        placeholder={
          <Image
            src="/icon/arrow-left.svg"
            alt="arrow left"
            width={24}
            height={24}
          />
        }
        alt="cta button"
      />
      <Button
        cta="افزودن به"
        placeholder={
          <Image
            src="/icon/arrow-left.svg"
            alt="arrow left"
            width={24}
            height={24}
          />
        }
        alt="cta button"
      />
    </div>
  );
};

export default Submits;
