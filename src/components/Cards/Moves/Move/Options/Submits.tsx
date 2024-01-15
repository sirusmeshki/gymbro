import { FC, useState } from 'react'

import Image from 'next/image'

import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'

import Button from '@/components/Button'

import { SARsProps, WorkoutProps } from '../../../models'
import {
    onErrorToast,
    onSuccessToast,
    onSetsEmptyToast,
    onRepsEmptyToast,
    onProgressToast,
} from './toasts'
import Selectbox from '@/components/Input/Selectbox'

const Submits: FC<WorkoutProps> = ({
    name,
    effective_muscle,
    image_url,
    rest,
    SARs,
    setIsOptionsOpen,
}) => {
    const [workouts, setWorkouts] = useLocalStorage<WorkoutProps[]>(
        'workouts',
        []
    )

    const [plans, setPlans] = useLocalStorage('plan', [
        { session: '1', workouts: [] },
        { session: '2', workouts: [] },
        { session: '3', workouts: [] },
        { session: '4', workouts: [] },
        { session: '5', workouts: [] },
        { session: '6', workouts: [] },
    ])

    const activeSession = useReadLocalStorage('session')
    const session = activeSession ? activeSession : '1'

    const handleAddMove = (name: string, SARs: SARsProps) => {
        let isSetsEmpty = SARs.single?.sets === ''
        let isRepsEmpty = SARs.single?.reps === ''

        const workout = {
            name,
            effective_muscle,
            image_url,
            rest,
            SARs,
            superset: null,
        }

        // const plan = {
        //     session,
        //     workouts: [
        //         {
        //             name,
        //             effective_muscle,
        //             image_url,
        //             rest,
        //             SARs,
        //             superset: null,
        //         },
        //     ],
        // }
        // const selectedPlan = plans.find((plan) => plan.session === session)
        // const workouts = selectedPlan?.workouts

        const isAlreadyAdded = workouts.find((workout) => workout.name === name)

        if (!isAlreadyAdded) {
            if (isSetsEmpty) {
                onSetsEmptyToast()
            }
            if (isRepsEmpty) {
                onRepsEmptyToast()
            }

            if (!isSetsEmpty && !isRepsEmpty) {
                setWorkouts([...workouts, workout])
                onSuccessToast()
                setIsOptionsOpen?.(false)
            }
        } else {
            onErrorToast()
            setIsOptionsOpen?.(false)
        }
    }

    const [supersets] = useState([
        { value: 'A', hoverColor: 'hover:bg-blue-100' },
        { value: 'B', hoverColor: 'hover:bg-green-100' },
        { value: 'C', hoverColor: 'hover:bg-purple-100' },
        { value: 'D', hoverColor: 'hover:bg-teal-100' },
    ])

    //Superset modal
    const handleAddSuperset = (superset: string) => {
        onProgressToast()
        // const workout = {
        //   superset: [{ name, effective_muscle, image_url, rest, SARs, superset }],
        // };
        // setWorkouts([...workouts, workout]);
        setIsOptionsOpen?.(false)
    }

    return (
        <div className="border-top flex h-[65px] shrink-0">
            <Selectbox
                title="افزودن به سوپرست"
                options={supersets}
                onOptionClick={(e) => handleAddSuperset(e)}
            />

            <Button
                cta="افزودن"
                placeholder={
                    <Image
                        src="/icon/arrow-left.svg"
                        alt="arrow left"
                        width={24}
                        height={24}
                    />
                }
                alt="cta button"
                onClick={() => handleAddMove(name, SARs)}
            />
        </div>
    )
}

export default Submits
