import { useIsClient, useReadLocalStorage } from 'usehooks-ts'

import { WorkoutProps } from '@/components/Cards/Workouts/Plan/models'
import Fill from '../Cards/Workouts/Plan/Fill'

const Workouts = () => {
    // Fix Later
    const workouts = useReadLocalStorage<any>('workouts')
    const isClient = useIsClient()

    return <>{isClient && <Fill workouts={workouts} pdf />}</>
}

export default Workouts
