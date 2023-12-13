import { FC } from 'react'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import ScanSearch from '@/components/Input/ScanSearch'

export const metadata: Metadata = {
    title: 'GymBro | اسکن - جیم برو',
    description: 'اسکن برنامه بدنسازی جیم برو',
}

const ScanPage: FC = ({
    searchParams,
}: {
    searchParams?: { plan?: string }
}) => {
    const planQuery = searchParams?.plan || ''

    return (
        <section className='layout-height flex w-full'>
            {/* Big Device: right side section, women character*/}
            <div className='border-left hidden h-full w-full max-w-[480px] flex-col items-center justify-between gap-10 overflow-hidden px-6 pt-10 lg:flex 3xl:px-0'>
                <p className='text-center font-semibold'>
                    برای جستجو برنامه میتوانید QR Code روی برنامه اسکن و یا از
                    کد برنامه استفاده کنید
                </p>
                <Image
                    src='/images/character-4.svg'
                    className='shrink-1 h-full w-full'
                    alt='women character'
                    width={300}
                    height={300}
                />
            </div>

            {/* Content  */}
            <div className='flex h-full w-full flex-col-reverse overflow-y-auto sm:flex-col'>
                <div className='border-left mt-auto flex w-full flex-col items-center justify-between gap-4 overflow-y-auto md:justify-between'>
                    <Image
                        className='px-4 pt-10'
                        src='/images/example-plan.png'
                        width={460}
                        height={400}
                        alt='example plan'
                    />
                </div>
                <div className='sm:border-top flex h-auto w-full shrink-0 flex-col sm:h-20 sm:flex-row md:h-24 lg:h-28 xl:h-40'>
                    <ScanSearch />
                    <Link
                        className='border-bottom h-40 w-full sm:h-auto sm:border-0'
                        href={`/scan/${planQuery}`}>
                        <Button
                            cta='پیداکن'
                            placeholder={
                                <Image
                                    src='/icon/arrow-left.svg'
                                    alt='arrow left'
                                    width={24}
                                    height={24}
                                />
                            }
                            alt='cta button'
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ScanPage
