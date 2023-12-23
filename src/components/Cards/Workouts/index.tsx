import { useIsClient, useReadLocalStorage } from 'usehooks-ts'

import clsx from 'clsx'

import Workout from '@/components/Cards/Workouts/Workout'
import { WorkoutProps } from '@/components/Cards/Moves/Move/models'
// import EditingWorkout from "./EditingWorkout";

const Workouts = ({ isEditing }: { isEditing?: boolean }) => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <>
            {isClient && (
                <ul
                    className={clsx(
                        'sidebar border-left flex h-full w-full flex-col overflow-y-scroll bg-white lg:border-none',
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
