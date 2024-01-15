'use client'

import { FC } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

import { useDebouncedCallback } from 'use-debounce'
import { useLocalStorage } from 'usehooks-ts'

type OptionProps = {
    title: string
    query: string
    type: 'text' | 'selectbox' | 'checkbox' | 'number'
    options?: string[]
    placeholder?: string
}

const Option: FC<OptionProps> = ({
    title,
    query,
    type,
    placeholder,
    options,
}) => {
    const [userInfo, setUserInfo] = useLocalStorage(query, '')
    const [isChecked, setOption] = useLocalStorage(query, false)
    const [selected, setSelected] = useLocalStorage(query, '1')

    const handleChange = useDebouncedCallback((term) => {
        return term ? setUserInfo(term) : setUserInfo('')
    }, 500)

    const handleCheckbox = () => {
        return !isChecked ? setOption(true) : setOption(false)
    }

    const handleSelectBox = (e: string) => {
        let isSelected = e === selected
        return !isSelected && setSelected(e)
    }

    return (
        <div className="border-top flex h-14 items-center">
            <label className="min-w-[100px] pr-4 font-semibold text-neutral-600">
                {title}:
            </label>

            {/* Selectbox */}
            {type === 'selectbox' &&
                options?.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelectBox(option)}
                        className={clsx(
                            'border-right flex h-full w-full cursor-pointer items-center justify-center',
                            selected === option
                                ? 'bg-lightGreen font-bold text-black'
                                : 'bg-white'
                        )}>
                        {option}
                    </div>
                ))}

            {/* Text input */}
            {type === 'text' && (
                <input
                    className="border-right h-full w-full pr-4 font-semibold text-black placeholder:font-light placeholder:text-neutral-500 focus:border-black focus:bg-lightGreen focus:outline-none"
                    type="text"
                    placeholder={placeholder}
                    defaultValue={userInfo}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                />
            )}

            {/* Number input */}
            {type === 'number' && (
                <input
                    className="border-right h-full w-full pr-4 font-semibold text-black placeholder:font-light placeholder:text-neutral-500 focus:border-black focus:bg-lightGreen focus:outline-none"
                    type="number"
                    placeholder={placeholder}
                    defaultValue={userInfo}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                />
            )}

            {/* */}

            {/* Checkbox input */}
            {type === 'checkbox' && (
                <div
                    className={clsx(
                        isChecked && 'bg-lightGreen',
                        'border-right group flex h-full w-full cursor-pointer items-center justify-center hover:bg-neutral-100'
                    )}
                    onClick={() => handleCheckbox()}>
                    <Image
                        className={clsx(
                            !isChecked && 'hidden',
                            'h-6 w-6 group-hover:block'
                        )}
                        src="/icon/tik.svg"
                        alt="tik icon"
                        width={24}
                        height={24}
                    />
                </div>
            )}
        </div>
    )
}

export default Option
