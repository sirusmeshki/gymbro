import { useReadLocalStorage } from 'usehooks-ts'

import { Text, View } from '@react-pdf/renderer'
import { tw } from './utils'
import { WorkoutProps } from '../Cards/Moves/Move/models'

const Workouts = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')

    return (
        <View style={tw('border border-black border-b-0 bg-neutral-950')}>
            {workouts?.map((workout, index) => (
                // Workout Card
                <View
                    style={tw(
                        `border-b border-black flex flex-row items-center justify-between gap-4 p-4 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'
                        }`
                    )}
                    key={index}>
                    {/* Move Name */}

                    <View style={tw('flex flex-row-reverse gap-4')}>
                        {/* Sets and Reps */}

                        {/* Rest Time */}
                        {workout.rest && (
                            <View style={tw('flex flex-row gap-2')}>
                                {/* Second */}
                                {workout.rest.sec ? (
                                    <View style={tw('flex flex-row gap-1')}>
                                        <Text style={tw('text-xs')}>ثانیه</Text>
                                        <Text style={tw('font-bold text-sm')}>
                                            {workout.rest.sec}
                                        </Text>
                                    </View>
                                ) : null}

                                {/* Minute */}
                                {workout.rest.min ? (
                                    <View style={tw('flex flex-row gap-1')}>
                                        <Text style={tw('text-xs ')}>
                                            دقیقه
                                        </Text>
                                        <Text style={tw('font-bold text-sm')}>
                                            {workout.rest.min}
                                        </Text>
                                    </View>
                                ) : null}
                            </View>
                        )}

                        <View style={tw('flex min-w-[60px] flex-row gap-1')}>
                            <Text style={tw('font-bold text-sm')}>
                                {workout.SARs.single?.sets}x
                            </Text>
                            <Text style={tw('font-light text-sm')}>
                                {workout.SARs.single?.reps}
                            </Text>
                        </View>
                    </View>

                    <Text style={tw('text-sm font-bold')}>{workout.name}</Text>
                </View>
            ))}
        </View>
    )
}

export default Workouts
