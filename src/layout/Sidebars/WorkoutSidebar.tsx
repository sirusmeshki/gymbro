'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useIsClient, useLocalStorage, useReadLocalStorage } from 'usehooks-ts'

import Button from '@/components/Button'
import Selectbox from '@/components/Input/Selectbox'
import Workouts from '@/components/Cards/Workouts/Move'
import { WorkoutProps } from '@/components/Cards/models'

const WorkoutSidebar = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <aside className="absolute flex min-w-[480px] translate-x-full flex-col lg:fixed lg:h-[calc(100dvh-42px)] lg:translate-x-0">
            <Workouts />
            <Link href="/plan" className="border-top mb-44 h-32">
                <Button
                    cta="ساخت برنامه"
                    disabled={isClient && !workouts}
                    placeholder={
                        <Image
                            src="/icon/arrow-left.svg"
                            alt="arrow left"
                            width={24}
                            height={24}
                        />
                    }
                    alt="submit workouts button"
                />
            </Link>
        </aside>
    )
}

export default WorkoutSidebar

{
    /* <header className="w-[calc(100vw - 10px)] border-bottom flex min-h-[96px] items-center justify-center">
                <Selectbox
                    className="h-full w-2/4"
                    title={`جلسه ها =${session}`}
                    options={sessions}
                    onOptionClick={(e) => setSession(e)}
                    activeOption={session}
                />
                <Button
                    className="bg-lightPurple"
                    cta="ایجاد تغییرات"
                    placeholder={
                        <Image
                            src="/icon/arrow-left.svg"
                            alt="arrow left"
                            width={24}
                            height={24}
                        />
                    }
                    alt="edit workouts button"
                />
            </header> */
}

// const [sessions] = useState([
//     { value: '1' },
//     { value: '2' },
//     { value: '3' },
//     { value: '4' },
//     { value: '5' },
//     { value: '6' },
// ])

// const [session, setSession] = useLocalStorage('session', '1')
