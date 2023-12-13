import { FC } from 'react'

import Image from 'next/image'
import { clsx } from 'clsx'

type ButtonProps = {
    className?: string
    cta?: string
    icon?: string
    href?: string
    alt: string
    placeholder?: any
    disabled?: boolean
    iconWidth?: number
    iconHeight?: number
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({
    className,
    cta,
    icon,
    alt,
    placeholder,
    disabled,
    iconWidth,
    iconHeight,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={clsx(
                'group relative flex h-full w-full items-center justify-center overflow-hidden text-base font-extrabold text-neutral-800 focus-within:bg-lightBlue',
                cta && 'w-full bg-lightBlue text-xl font-semibold',
                className && className
            )}>
            {!disabled && (
                <div
                    className={clsx(
                        'absolute flex h-full w-full translate-y-full items-center justify-center  bg-lightBlue text-xs  font-bold delay-75 duration-200 ease-transition-button group-hover:translate-y-0 first-line:sm:text-sm',
                        cta && 'bg-white'
                    )}>
                    {placeholder}
                </div>
            )}

            {icon && (
                <Image
                    className="aspect-square"
                    width={!iconWidth ? 24 : iconWidth}
                    height={!iconHeight ? 24 : iconHeight}
                    alt={alt}
                    src={icon}
                />
            )}

            {cta && (
                <div
                    className={clsx(
                        'flex h-full w-full items-center justify-center text-sm font-extrabold',
                        disabled && 'bg-gray-200 opacity-20'
                    )}>
                    {cta}
                </div>
            )}
        </button>
    )
}

export default Button
