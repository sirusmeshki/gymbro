import { FC, useState } from 'react'

import Image from 'next/image'

import { useLocalStorage } from 'usehooks-ts'

import Button from '@/components/Button'

import { SARsProps, WorkoutProps } from '../models'
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
    const [isSuperset, setIsSuperset] = useState(false)

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
