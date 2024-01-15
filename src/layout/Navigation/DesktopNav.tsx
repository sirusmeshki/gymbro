import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Tip from './Tip'
import Buttons from './Buttons'

const DesktopNav: FC = () => {
    return (
        <section className="border-bottom flex flex-col items-center justify-center">
            <Tip className="border-b" />
            <div className="border-top flex w-full items-center justify-center">
                <Link
                    href="/"
                    className="flex w-full max-w-[480px] items-center justify-center md:h-[176px]">
                    <Image
                        src="/Logo.svg"
                        alt="logo"
                        className="h-fit w-fit"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                <Buttons />
            </div>
        </section>
    )
}

export default DesktopNav
