'use client'

import { useIsClient, useReadLocalStorage } from 'usehooks-ts'
import { WorkoutProps } from '@/components/Cards/Moves/Move/models'
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'

const PlanWorkouts = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <>
            {isClient && (
                <section className="border border-black">
                    {!workouts ? (
                        <div className="flex flex-col">
                            <p className="m-4 text-center text-xs font-semibold">
                                لیست تمرین شما خالی است.
                            </p>
                            <Link
                                className="border-top h-16 w-full shrink-0"
                                href="/moves">
                                <Button
                                    cta="اضافه کردن حرکت"
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
                            </Link>
                        </div>
                    ) : (
                        workouts?.map((workout, index) => (
                            <div
                                className="border-bottom flex items-center justify-between gap-4 px-4 py-3 last:border-0 even:bg-neutral-50"
                                key={index}>
                                {/* Move Name */}
                                <h3 className="text-sm font-bold">
                                    {workout.name}
                                </h3>

                                <div className="flex flex-row-reverse gap-4">
                                    {/* Sets and Reps */}
                                    <div className="flex min-w-[60px] flex-row-reverse gap-1">
                                        <p className="font-bold">
                                            {workout.SARs.single?.sets}x
                                        </p>
                                        <p className="font-light">
                                            {workout.SARs.single?.reps}
                                        </p>
                                    </div>

                                    {/* Rest Time */}
                                    {workout.rest && (
                                        <div className="flex gap-2">
                                            {/* Minute */}
                                            {workout.rest.min && (
                                                <p className="flex gap-1">
                                                    <span className="font-bold">
                                                        {workout.rest.min}
                                                    </span>
                                                    <span className="text-xs">
                                                        دقیقه
                                                    </span>
                                                </p>
                                            )}

                                            {/* Second */}
                                            {workout.rest.sec && (
                                                <p className="flex gap-1">
                                                    <span className="font-bold">
                                                        {workout.rest.sec}
                                                    </span>
                                                    <span className="text-xs">
                                                        ثانیه
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </section>
            )}
        </>
    )
}

export default PlanWorkouts
