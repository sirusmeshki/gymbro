import { useEffect, useState } from 'react'
import { useReadLocalStorage } from 'usehooks-ts'

import clsx from 'clsx'

import Workout from '@/components/Cards/Workouts/Workout'
import { WorkoutProps } from '@/components/Cards/Moves/Move/Options/models'
// import EditingWorkout from "./EditingWorkout";

const Workouts = ({ isEditing }: { isEditing: boolean }) => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>
            {isClient && (
                <ul
                    className={clsx(
                        'border-left flex h-full w-full flex-col overflow-y-auto bg-white lg:border-none',
                        !workouts && 'items-center justify-center'
                    )}>
                    {/* When list is empty */}
                    {!workouts && (
                        <li className='text-xs font-semibold'>
                            برای افزودن حرکت بر روی کارت ها کلیک کنید
                        </li>
                    )}

                    {workouts?.map(
                        (workout: WorkoutProps, index) =>
                            !isEditing && (
                                <Workout
                                    key={index}
                                    name={workout.name}
                                    image_url={workout.image_url}
                                    effective_muscle={workout.effective_muscle}
                                    rest={workout.rest}
                                    SARs={workout.SARs}
                                    superset={workout.superset}
                                />
                            )
                        // : (
                        //   <EditingWorkout
                        //     key={index}
                        //     name={workout.name}
                        //     effective_muscle={workout.effective_muscle}
                        //     rest={workout.rest}
                        //     SARs={workout.SARs}
                        //     superset={workout.superset}
                        //   />
                        // )
                    )}
                </ul>
            )}
        </>
    )
}

export default Workouts
