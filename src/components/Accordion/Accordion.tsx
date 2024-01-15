'use client'

import { FC } from 'react'

import Image from 'next/image'

import clsx from 'clsx'
import { useToggle } from 'usehooks-ts'

type AccordionProps = {
    title: string
    children: JSX.Element[]
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
    // Open and close accordion
    const [isOpen, toggle] = useToggle()

    return (
        <li className="border-bottom bg-white">
            <header
                className="flex cursor-pointer items-center justify-between gap-1 px-5 py-8"
                onClick={() => toggle()}>
                <h5 className="text-base font-bold text-neutral-800">
                    {title}
                </h5>
                <Image
                    className={clsx(isOpen && 'rotate-180', 'h-auto w-auto')}
                    width={24}
                    height={24}
                    src="/icon/arrow.svg"
                    alt="arrow icon"
                />
            </header>
            <div
                className={clsx(
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    'grid transition-all'
                )}>
                <div className="overflow-hidden text-xs font-normal leading-5 text-neutral-400 sm:text-sm">
                    {children}
                </div>
            </div>
        </li>
    )
}

export default Accordion
