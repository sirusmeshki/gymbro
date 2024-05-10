import { FC } from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import clsx from 'clsx'

import Button from '@/components/Button'
import { buttons } from './utils'

interface ButtonsProps {
    className?: string
}

const Buttons: FC<ButtonsProps> = ({ className }) => {
    const activeSegment = useSelectedLayoutSegment()

    return (
        <ul
            className={clsx(
                `
                border-top
                flex
                h-20
                w-full
                items-center
                justify-center
                bg-white
                sm:h-24
                md:h-32
                lg:h-44
                lg:border-none
                `,
                className && className
            )}>
            {buttons.map((button, index) => (
                <li key={index} className="h-full w-full">
                    <Link
                        className={clsx(`h-full w-full lg:w-60`)}
                        href={button.href}>
                        <Button
                            className={clsx(
                                activeSegment === button.activeSegment
                                    ? 'bg-lightBlue'
                                    : '',
                                'sm:border-right'
                            )}
                            placeholder={button.placeholder}
                            icon={button.icon}
                            alt={button.href}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Buttons
