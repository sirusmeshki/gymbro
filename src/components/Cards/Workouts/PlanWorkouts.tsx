'use client'

import { useIsClient, useReadLocalStorage } from 'usehooks-ts'
import { WorkoutProps } from '@/components/Cards/Moves/Move/models'

const PlanWorkouts = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <>
            {isClient && (
                <section className="border border-black">
                    {workouts?.map((workout, index) => (
                        // Workout Card
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
                    ))}
                </section>
            )}
        </>
    )
}

export default PlanWorkouts
