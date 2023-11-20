import { FC } from "react";

import Image from "next/image";

import Button from "@/components/Button";
// import Search from "@/components/Input/Search2";
import Link from "next/link";

const ScanPage: FC = () => {
  return (
    <section className=" w-full layout-height flex">
      <div className="w-full max-w-[480px] h-full justify-between items-center overflow-hidden hidden lg:flex flex-col gap-10 pt-10 px-6 3xl:px-0 border-left">
        <p className="font-semibold text-center">
          برای جستجو برنامه میتوانید QR Code روی برنامه اسکن و یا از کد برنامه
          استفاده کنید
        </p>
        <Image
          src="/images/character-4.svg"
          className="w-fit shrink "
          alt="women character"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col h-full w-full overflow-y-auto">
        <div className="w-full h-full flex justify-center items-end sm:pt-4">
          <Image
            className="pt-10 px-4"
            src="/images/example-plan.png"
            width={460}
            height={400}
            alt="example plan"
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row shrink-0 h-40 border-top">
          {/* <Search placeholder="مثال: 2AB4" /> */}
          <Button
            cta="پیداکن"
            className=""
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
      </div>
    </section>
  );
};

export default ScanPage;
