'use client'

import ReactPDF, {
    Document,
    Page,
    Text,
    View,
    PDFViewer,
    Image,
    Font,
} from '@react-pdf/renderer'

import { createTw } from 'react-pdf-tailwind'
import { useReadLocalStorage } from 'usehooks-ts'

import { WorkoutProps } from '@/components/Cards/Moves/Move/models'

//Font setup
Font.register({
    family: 'DanaFaNum',
    fonts: [
        { fontWeight: 300, src: '/fonts/DanaFaNum-Light.ttf' },
        { fontWeight: 600, src: '/fonts/DanaFaNum-DemiBold.ttf' },
        { fontWeight: 700, src: '/fonts/DanaFaNum-Bold.ttf' },
        { fontWeight: 900, src: '/fonts/DanaFaNum-Black.ttf' },
    ],
})

// Tailwind setup
const tw = createTw({
    theme: {
        fontFamily: {
            sans: ['DanaFaNum'],
        },
    },
})

const MyDoc = () => {
    const workouts = useReadLocalStorage<WorkoutProps[]>('workouts')
    const name = useReadLocalStorage('name')
    const weight = useReadLocalStorage('weight')
    const height = useReadLocalStorage('height')
    const qr = useReadLocalStorage('qr')
    const code = useReadLocalStorage('code')
    const description = useReadLocalStorage('desc')

    const personalInfo = name || weight || height

    return (
        <Document>
            <Page size="A4" style={tw('flex flex-col gap-6 p-4 font-sans')}>
                {/* Header */}
                <View
                    style={tw(
                        'flex flex-row-reverse h-12 w-full items-center justify-between'
                    )}>
                    <Image style={tw('w-16')} src={'/logo.png'} />

                    {code ? (
                        <Text
                            style={tw('text-lg font-black')}>{`#${code}`}</Text>
                    ) : null}
                    {qr ? (
                        <Image style={tw('w-[50] h-[50]')} src={'/qr.png'} />
                    ) : null}
                </View>

                {/* Personal Info */}
                {personalInfo ? (
                    <View
                        style={tw(
                            'flex flex-row-reverse w-full items-center justify-between'
                        )}>
                        {/* li */}
                        {/* User name */}
                        {name ? (
                            <View style={tw('text-xs font-semibold')}>
                                <Text>
                                    <Text
                                        style={tw(
                                            'font-light'
                                        )}>{`${name}`}</Text>
                                    نام:
                                </Text>
                            </View>
                        ) : null}

                        {/* User weight */}
                        {weight ? (
                            <View style={tw('text-xs font-semibold')}>
                                <Text>
                                    <Text
                                        style={tw(
                                            'font-light'
                                        )}>{`${weight}`}</Text>
                                    وزن:
                                </Text>
                            </View>
                        ) : null}

                        {/* User height */}
                        {height ? (
                            <View style={tw('text-xs font-semibold')}>
                                <Text>
                                    <Text style={tw('font-light')}>{`${
                                        height ? height : ''
                                    }`}</Text>
                                    قد:
                                </Text>
                            </View>
                        ) : null}
                    </View>
                ) : null}

                {/* Workouts */}
                <View
                    style={tw('border border-black border-b-0 bg-neutral-950')}>
                    {workouts?.map((workout, index) => (
                        // Workout Card
                        <View
                            style={tw(
                                `border-b border-black flex flex-row items-center justify-between gap-4 p-4 ${
                                    index % 2 === 0
                                        ? 'bg-white'
                                        : 'bg-neutral-50'
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
                                        {workout.rest.sec && (
                                            <View
                                                style={tw(
                                                    'flex flex-row gap-1'
                                                )}>
                                                <Text style={tw('text-xs')}>
                                                    ثانیه
                                                </Text>
                                                <Text
                                                    style={tw(
                                                        'font-bold text-sm'
                                                    )}>
                                                    {workout.rest.sec}
                                                </Text>
                                            </View>
                                        )}

                                        {/* Minute */}
                                        {workout.rest.min && (
                                            <View
                                                style={tw(
                                                    'flex flex-row gap-1'
                                                )}>
                                                <Text style={tw('text-xs ')}>
                                                    دقیقه
                                                </Text>
                                                <Text
                                                    style={tw(
                                                        'font-bold text-sm'
                                                    )}>
                                                    {workout.rest.min}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                )}

                                <View
                                    style={tw(
                                        'flex min-w-[60px] flex-row gap-1'
                                    )}>
                                    <Text style={tw('font-bold text-sm')}>
                                        {workout.SARs.single?.sets}x
                                    </Text>
                                    <Text style={tw('font-light text-sm')}>
                                        {workout.SARs.single?.reps}
                                    </Text>
                                </View>
                            </View>

                            <Text style={tw('text-sm font-bold')}>
                                {workout.name}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Description */}
                <View style={tw('text-right')}>
                    <Text style={tw('text-sm')}>
                        <Text style={tw('font-light')}>{`${
                            description ? description : ''
                        }`}</Text>
                        <Text style={tw('font-bold')}>توضیحات: </Text>
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default MyDoc
