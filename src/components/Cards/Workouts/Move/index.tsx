import { useIsClient, useReadLocalStorage } from 'usehooks-ts'
import { WorkoutProps } from '@/components/Cards/models'
import clsx from 'clsx'

import Workout from './Workout'

const Workouts = ({ isEditing }: { isEditing?: boolean }) => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <>
            {isClient && (
                <ul
                    className={clsx(
                        'sidebar border-left flex h-full w-full flex-col overflow-y-auto bg-white lg:border-none',
                        !workouts && 'items-center justify-center'
                    )}>
                    {/* When list is empty */}
                    {!workouts && (
                        <li className="text-xs font-semibold">
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
