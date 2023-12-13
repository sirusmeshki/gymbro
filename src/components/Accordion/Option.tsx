'use client'

import { FC, useState } from 'react'

import Image from 'next/image'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import clsx from 'clsx'

import { useDebouncedCallback } from 'use-debounce'

type OptionProps = {
    title: string
    query: string
    // type: "input" | "checkbox";
    isInput: boolean
    inputType?: string
    placeholder?: string
}

const Option: FC<OptionProps> = ({
    title,
    query,
    isInput,
    placeholder,
    inputType,
}) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const [isOptionSelected, setIsOptionSelected] = useState(false)

    const handleChange = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set(query, term)
        } else {
            params.delete(query)
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)

    const handleCheckbox = () => {
        setIsOptionSelected((prev) => !prev)
        const params = new URLSearchParams(searchParams)

        if (!isOptionSelected) {
            params.set(query, 'true')
        } else {
            params.delete(query)
        }

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='border-top flex h-14 items-center'>
            <label className='min-w-[100px] pr-4 font-semibold text-neutral-600'>
                {title}:
            </label>

            {/* Text input */}
            {isInput && (
                <input
                    className='border-right h-full w-full pr-4  text-black placeholder:text-neutral-600 focus:border-black focus:bg-lightGreen focus:outline-none'
                    type={inputType}
                    placeholder={placeholder}
                    defaultValue={searchParams.get(query)?.toString()}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                />
            )}

            {/* Checkbox input */}
            {!isInput && (
                <div
                    className={clsx(
                        isOptionSelected && 'bg-lightGreen',
                        'border-right group flex h-full w-full cursor-pointer justify-center hover:bg-neutral-100'
                    )}
                    onClick={() => handleCheckbox()}>
                    <Image
                        className={clsx(
                            !isOptionSelected && 'hidden',
                            'group-hover:block'
                        )}
                        src='/icon/tik.svg'
                        alt='tik icon'
                        width={24}
                        height={24}
                    />
                </div>
            )}
        </div>
    )
}

export default Option
