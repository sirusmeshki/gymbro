import { FC } from 'react'

import Image from 'next/image'

import { useToggle } from 'usehooks-ts'
import clsx from 'clsx'

import Button from '../Button'

type OptionProps = {
    value: string
    hoverColor?: string
}

type SelectboxProps = {
    className?: string
    title: string
    options: OptionProps[]
    activeOption?: string
    onOptionClick?: (e: string) => void
}

const Selectbox: FC<SelectboxProps> = ({
    className,
    title,
    options,
    activeOption,
    onOptionClick,
}) => {
    const [isOpen, toggle] = useToggle(false)

    return (
        <div className={clsx('relative', className)}>
            <Button
                cta={title}
                className="border-left bg-white px-6"
                onClick={() => toggle()}
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

            {isOpen && (
                <ul className="border-left absolute right-0 top-0 flex w-full flex-col items-center justify-center bg-white">
                    <li
                        className="border-bottom w-full cursor-pointer py-2 text-center font-extrabold hover:bg-red-400"
                        onClick={() => toggle()}>
                        لغو
                    </li>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => onOptionClick?.(option?.value)}
                            className={clsx(
                                'border-bottom w-full cursor-pointer p-1 text-center text-sm  font-semibold',
                                option.hoverColor
                                    ? option.hoverColor
                                    : 'hover:bg-neutral-100',
                                activeOption === option.value &&
                                    'bg-lightGreen hover:bg-lightGreen'
                            )}>
                            {option?.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Selectbox
