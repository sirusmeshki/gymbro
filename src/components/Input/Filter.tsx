'use client'

import { useState, FC } from 'react'

import Image from 'next/image'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import clsx from 'clsx'

const Filter: FC = () => {
    const [isBoxOpen, setIsBoxOpen] = useState(false)

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const selectedMuscle = searchParams.get('muscle')

    const handleSelect = (muscle: string) => {
        const params = new URLSearchParams(searchParams)
        if (muscle) {
            params.set('muscle', muscle)
            setIsBoxOpen(false)
        } else {
            params.delete('muscle')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    const handleRemoveFilter = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('muscle')
        replace(`${pathname}?${params.toString()}`)
        setIsBoxOpen(false)
    }

    const muscles = [
        'سینه',
        'پا',
        'جلو بازو',
        'پشت بازو',
        'سرشانه',
        'زیربغل',
        'ساعد',
        'کول',
        'شکم',
        'ساق پا',
    ]

    return (
        <div className="sm:border-right relative  h-full w-full  gap-6">
            {/* Header */}
            <div
                onClick={() => setIsBoxOpen((prev) => !prev)}
                className="z-50 flex h-full w-full cursor-pointer items-center justify-between">
                <h6 className="mr-4 text-sm font-medium text-neutral-700">
                    <span>عضله</span>
                    <span>{selectedMuscle && `: ${selectedMuscle}`}</span>
                </h6>
                <Image
                    width="0"
                    height="0"
                    className={clsx(
                        isBoxOpen ? 'rotate-180' : '',
                        'ml-4 h-4 w-4 transition-all'
                    )}
                    alt="search icon"
                    src="/icon/arrow.svg"
                />
            </div>

            {/* Select values modal */}
            <div
                className={clsx(
                    isBoxOpen ? 'flex' : 'hidden',
                    'border-bottom absolute z-40 h-fit w-full flex-col bg-white 2xl:border-r-0'
                )}>
                {/* Clear filter button */}
                <span
                    className={clsx(
                        selectedMuscle ? 'bg-red-400 ' : 'text-neutral-300',
                        'border-top cursor-pointer px-2 py-6 text-center font-extrabold'
                    )}
                    onClick={() => handleRemoveFilter()}>
                    حذف فیلتر
                </span>

                {/* List of muscles */}
                <ul className="border-top grid grid-cols-2 gap-1 p-1 md:grid-cols-3 lg:grid-cols-4">
                    {muscles.map((muscle, index) => (
                        <li
                            className={clsx(
                                selectedMuscle === muscle
                                    ? 'bg-lightGreen text-neutral-800'
                                    : 'bg-white text-neutral-500',
                                'cursor-pointer p-4 text-center text-sm hover:bg-neutral-100'
                            )}
                            onClick={() => handleSelect(muscle)}
                            key={index}>
                            {muscle}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter
