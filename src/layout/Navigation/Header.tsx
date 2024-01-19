import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

const Header: FC = () => {
    return (
        <header className="border-bottom flex h-20 items-center justify-between pr-4">
            <Image
                className="h-auto w-20 lg:w-auto"
                src="/Logo.svg"
                alt="logo"
                width={100}
                height={100}
            />
            <Link className="h-full w-[80px]" href="/workout">
                <Button
                    className="border-0"
                    icon="/icon/menu.svg"
                    alt="menu icon"
                    iconHeight={32}
                    iconWidth={32}
                    placeholder="تمرینات"
                />
            </Link>
        </header>
    )
}

export default Header
