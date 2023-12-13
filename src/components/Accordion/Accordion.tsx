'use client'

import { FC, useState } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

type AccordionProps = {
    title: string
    children: JSX.Element[]
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <li className='border-bottom'>
            <header
                className='flex cursor-pointer items-center justify-between gap-1 px-5 py-8'
                onClick={() => setIsOpen((prev) => !prev)}>
                <h5 className='text-base font-bold text-neutral-800'>
                    {title}
                </h5>
                <Image
                    className={clsx(isOpen && 'rotate-180')}
                    width={24}
                    height={24}
                    src='/icon/arrow.svg'
                    alt='arrow icon'
                />
            </header>
            <div
                className={clsx(
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    'grid transition-all'
                )}>
                <div className='overflow-hidden text-xs font-normal leading-5 text-neutral-400 sm:text-sm'>
                    {children}
                </div>
            </div>
        </li>
    )
}

export default Accordion
