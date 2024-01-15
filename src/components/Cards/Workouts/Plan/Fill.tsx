'use client'

import clsx from 'clsx'

import { StyleSheet, View } from '@react-pdf/renderer'
import { useReadLocalStorage } from 'usehooks-ts'

import { WorkoutProps } from './models'
import Workout from './Workout'

const styles = StyleSheet.create({
    wrapper: {
        border: '1pt solid black',
        borderBottom: '0',
        flexDirection: 'column',
    },
})

const Fill = ({
    workouts,
    pdf,
}: {
    workouts: WorkoutProps[]
    pdf: boolean
}) => {
    const designLocalStorage = useReadLocalStorage<string>('design')
    const design = designLocalStorage === null ? '1' : designLocalStorage

    const two = design === '2'

    return (
        <>
            {pdf ? (
                <View
                    style={[
                        styles.wrapper,
                        {
                            display: two ? 'flex' : 'flex',
                            flexDirection: 'row-reverse',
                            flexWrap: 'wrap',
                        },
                    ]}>
                    {workouts.map((workout, index) => (
                        <Workout
                            key={index}
                            index={index}
                            name={workout.name}
                            rest={workout.rest}
                            SARs={workout.SARs}
                            image_url={workout.image_url}
                            pdf={pdf}
                            design={design}
                        />
                    ))}
                </View>
            ) : (
                <ul
                    className={clsx(
                        design === '1' && 'flex flex-col',
                        design === '2' && 'grid grid-cols-2'
                    )}>
                    {workouts.map((workout: WorkoutProps, index) => (
                        <Workout
                            key={index}
                            index={index}
                            name={workout.name}
                            rest={workout.rest}
                            SARs={workout.SARs}
                            image_url={workout.image_url}
                            pdf={pdf}
                            design={design}
                        />
                    ))}
                </ul>
            )}
        </>
    )
}

export default Fill
