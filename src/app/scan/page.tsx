import { FC } from "react";

import Image from "next/image";

import Button from "@/components/Button";

import { Metadata } from "next";
import ScanSearch from "@/components/Input/ScanSearch";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GymBro | اسکن - جیم برو",
  description: "اسکن برنامه بدنسازی جیم برو",
};

const ScanPage: FC = ({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) => {
  const planQuery = searchParams?.plan || "";

  return (
    <section className="flex w-full layout-height">
      <div className="w-full max-w-[480px] h-full justify-between items-center overflow-hidden hidden lg:flex flex-col gap-10 pt-10 px-6 3xl:px-0 border-left">
        <p className="font-semibold text-center">
          برای جستجو برنامه میتوانید QR Code روی برنامه اسکن و یا از کد برنامه
          استفاده کنید
        </p>
        <Image
          src="/images/character-4.svg"
          className="shrink-1 w-full h-full"
          alt="women character"
          width={300}
          height={300}
        />
      </div>

      {/* content  */}
      <div className="flex flex-col-reverse sm:flex-col w-full h-full overflow-y-auto">
        <div className="flex flex-col justify-between items-center md:justify-between h-full w-full border-left overflow-y-auto gap-4">
          <Image
            className="px-4 pt-10"
            src="/images/example-plan.png"
            width={460}
            height={400}
            alt="example plan"
          />
        </div>
        <div className="flex flex-col w-full h-auto sm:h-20 md:h-24 lg:h-28 xl:h-40 sm:flex-row shrink-0 sm:border-top">
          <ScanSearch placeholder="مثال: 2AB4" />

          <Link
            className="w-full h-40 sm:h-auto border-bottom sm:border-0"
            href={`/scan/${planQuery}`}>
            <Button
              cta="پیداکن"
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScanPage;
