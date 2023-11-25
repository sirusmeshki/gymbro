import Button from "@/components/Button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main
        className="
        layout-height
        flex
        w-full
      ">
        <div className="w-full max-w-[480px] justify-center items-center hidden md:flex border-left py-20">
          <Image
            src="/images/character-1.svg"
            className="shrink-1 w-full h-full"
            alt="men character"
            width={240}
            height={544}
          />
        </div>
        <section className="flex flex-col justify-between items-center md:justify-between h-full w-full border-left overflow-y-auto gap-4 ">
          <div className="w-full h-fit max-h-52 flex justify-start items-start mt-10 md:hidden">
            <Image
              src="/images/character-3.svg"
              className="shrink-1 w-full h-full"
              alt="men character"
              width={406}
              height={226}
            />
          </div>

          <div className="flex flex-col items-center gap-4 md:m-auto px-4">
            <h1 className="font-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
              پلتفرم ساخت برنامه بدنسازی
            </h1>
            <p className="max-w-sm text-center font-light text-xs sm:text-sm md:text-base">
              با جیم برو به سادگی برای شاگردات برنامه ورزشی آماده کن و با حالت
              های مختلف خروجی بگیر.
            </p>
          </div>

          <Link
            href="/moves"
            className="w-full h-24 sm:h-32 md:h-40 border-top shrink-0">
            <Button
              cta="همین حالا بساز"
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
        </section>
        {/* <div className="w-full justify-center items-center border-left z-10 hidden xl:flex">
        <Image
          src="/images/character-2.svg"
          className="w-fit mx-3"
          alt="women character"
          width={100}
          height={100}
        />
      </div> */}
      </main>
    </>
  );
}
