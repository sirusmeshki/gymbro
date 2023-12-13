'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Workouts from '@/components/Cards/Workouts'

const Page = () => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <aside className='relative bg-red-600'>
            <header className='border-bottom flex h-20 items-center justify-center'>
                {isEditing ? (
                    <div className='flex h-full w-full items-center justify-center'>
                        <Button
                            cta='لغو'
                            className='bg-red-200'
                            onClick={() => setIsEditing((prev) => !prev)}
                            placeholder={
                                <Image
                                    src='/icon/arrow-left.svg'
                                    alt='arrow left'
                                    width={24}
                                    height={24}
                                />
                            }
                            alt='edit workouts button'
                        />

                        <Button
                            className='bg-green-200'
                            cta='ذخیره'
                            onClick={() => setIsEditing((prev) => !prev)}
                            placeholder={
                                <Image
                                    src='/icon/arrow-left.svg'
                                    alt='arrow left'
                                    width={24}
                                    height={24}
                                />
                            }
                            alt='edit workouts button'
                        />
                    </div>
                ) : (
                    <div className='border-left flex h-full w-full'>
                        <Link
                            className='h-full w-full'
                            href='/plan'>
                            <Button
                                cta='ساخت برنامه'
                                className='border-left h-full'
                                disabled={isEditing}
                                placeholder={
                                    <Image
                                        src='/icon/arrow-left.svg'
                                        alt='arrow left'
                                        width={24}
                                        height={24}
                                    />
                                }
                                alt='submit workouts button'
                            />
                        </Link>
                        <Button
                            className='flex-grow bg-lightPurple'
                            cta='ایجاد تغییرات'
                            placeholder={
                                <Image
                                    src='/icon/arrow-left.svg'
                                    alt='arrow left'
                                    width={24}
                                    height={24}
                                />
                            }
                            alt='edit workouts button'
                        />
                    </div>
                )}
            </header>

            <Workouts isEditing={isEditing} />
        </aside>
    )
}

export default Page
