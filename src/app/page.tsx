import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

export default function Home() {
    return (
        <>
            <main className="layout-height flex w-full">
                {/* Right side, men character */}
                <div className="hidden w-full max-w-[480px] items-center justify-center py-20 md:flex">
                    <Image
                        className="shrink-1 h-full w-full"
                        src="/images/character-1.svg"
                        alt="men character"
                        width={240}
                        height={544}
                    />
                </div>
                <section className="border-right flex h-full w-full flex-col items-center justify-between gap-4 overflow-y-auto md:justify-between">
                    {/* Small device, men character */}
                    <div className="mt-10 flex h-fit max-h-52 w-full items-start justify-start md:hidden">
                        <Image
                            className="shrink-1 h-full w-full p-4"
                            src="/images/character-3.svg"
                            alt="men character"
                            width={406}
                            height={226}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4 px-4 md:m-auto">
                        <h1 className="text-center text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl ">
                            پلتفرم ساخت برنامه بدنسازی
                        </h1>
                        <p className="max-w-sm text-center text-xs font-light sm:text-sm md:text-base">
                            با جیم برو به سادگی برای شاگردات برنامه ورزشی آماده
                            کن و با حالت های مختلف خروجی بگیر.
                        </p>
                    </div>

                    <Link
                        className="border-top h-24 w-full shrink-0 sm:h-32 md:h-40"
                        href="/moves">
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
            </main>
        </>
    )
}
