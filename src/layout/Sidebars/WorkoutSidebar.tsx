'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import Workouts from '@/components/Cards/Workouts'
import Selectbox from '@/components/Input/Selectbox'

const WorkoutSidebar = () => {
    const [activeSession, setActiveSession] = useState('1')
    const [sessions] = useState([
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
    ])

    return (
        <aside className="absolute flex min-w-[480px] translate-x-full flex-col lg:fixed lg:h-[calc(100dvh-42px)] lg:translate-x-0">
            <header className="w-[calc(100vw - 10px)] border-bottom flex min-h-[96px] items-center justify-center">
                <Selectbox
                    className="h-full w-2/4"
                    title="جلسه ها"
                    options={sessions}
                    onOptionClick={(e) => setActiveSession(e)}
                    activeOption={activeSession}
                />
                <Button
                    cta="ایجاد تغییرات"
                    className="bg-lightPurple"
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
            </header>
            <Workouts />
            <Link href="/plan" className="border-top mb-44 h-32">
                <Button
                    cta="ساخت برنامه"
                    // disabled={isEditing}
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
