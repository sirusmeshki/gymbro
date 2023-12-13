import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'

const Header: FC = () => {
    return (
        <header className='border-bottom flex h-24 items-center justify-between pr-4'>
            <Image
                className='h-auto w-auto'
                src='/Logo.svg'
                alt='logo'
                width={100}
                height={100}
            />
            <Link
                className='border-right h-full w-[96px]'
                href='/workout'>
                <Button
                    className='border-l-0'
                    icon='/icon/menu.svg'
                    alt='menu icon'
                    iconHeight={32}
                    iconWidth={32}
                    placeholder='تمرینات'
                />
            </Link>
        </header>
    )
}

export default Header
