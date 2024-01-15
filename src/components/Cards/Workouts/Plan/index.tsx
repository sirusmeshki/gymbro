'use client'

import { useIsClient, useReadLocalStorage } from 'usehooks-ts'

import Fill from './Fill'
import EmptyWorkouts from './Empty'

import { WorkoutProps } from './models'

const PlanWorkouts = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const isClient = useIsClient()

    return (
        <>
            {isClient ? (
                <div className="border border-black">
                    {workouts ? (
                        <Fill workouts={workouts} pdf={false} />
                    ) : (
                        <EmptyWorkouts />
                    )}
                </div>
            ) : null}
        </>
    )
}

export default PlanWorkouts
