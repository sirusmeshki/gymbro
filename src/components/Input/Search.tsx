'use client'

import Image from 'next/image'
import clsx from 'clsx'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import { useDebouncedCallback } from 'use-debounce'

export default function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('move', term)
        } else {
            params.delete('move')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 500)

    return (
        <label className='border-bottom border-right flex h-full w-full items-center justify-center gap-6 sm:border-b-0'>
            <input
                className='h-full w-full pr-4 text-base font-medium placeholder:text-sm placeholder:text-neutral-700 focus:outline-0'
                type='search'
                placeholder='نام حرکت را وارد کنید'
                defaultValue={searchParams.get('move')?.toString()}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
            />
            <Image
                className='ml-4 h-4 w-4'
                width='0'
                height='0'
                alt='search icon'
                src='/icon/search.svg'
            />
        </label>
    )
}
