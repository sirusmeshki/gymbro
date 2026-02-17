import { FC } from 'react'

import { StyleSheet, Text, View } from '@react-pdf/renderer'
import { useReadLocalStorage } from 'usehooks-ts'

import MoveImage from '../Components/Image'
import Name from '../Components/Name'
import Rest from '../Components/Rest'
import SetsAndReps from '../Components/SetsAndReps'

import { WorkoutProps } from '../../models'

const styles = StyleSheet.create({
    wrapper: {
        borderBottom: '1px solid black',
        display: 'flex',
        flexDirection: 'row-reverse',
        width: '50%',
    },
    counter: {
        width: '24pt',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '10pt',
        borderLeft: '1pt solid black',
    },

    infosContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },

    name: {
        padding: '12pt',
        textAlign: 'center',
    },

    detailsContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: '4pt',
        paddingBottom: '6pt',
        paddingHorizontal: '8pt',
        borderBottom: '0',
    },
})

const Two: FC<WorkoutProps> = ({ index, name, rest, SARs, image_url, pdf }) => {
    const counter = useReadLocalStorage<Boolean>('counter')
    const odd = index % 2 === 0

    return (
        <>
            {pdf ? (
                <View
                    style={[
                        styles.wrapper,
                        { borderLeft: odd ? '1px solid black' : '' },
                    ]}>
                    {counter ? (
                        <View style={styles.counter}>
                            <Text>{index + 1}</Text>
                        </View>
                    ) : null}

                    {/* Infos */}
                    <View style={styles.infosContainer}>
                        <MoveImage height="120pt" image_url={image_url} pdf />
                        <Name style={styles.name} name={name} pdf />
                        {/* Details */}
                        <View style={styles.detailsContainer}>
                            <Rest rest={rest} pdf />
                            <SetsAndReps SARs={SARs} pdf />
                        </View>
                    </View>
                </View>
            ) : (
                <li className="border-bottom odd:border-left workout-border-fix flex w-full ">
                    {counter && (
                        <span className="border-left flex w-6 items-center justify-center font-bold">
                            {index + 1}
                        </span>
                    )}

                    <div className="flex w-full flex-col items-center justify-between">
                        <MoveImage
                            height=""
                            className="border-bottom flex aspect-square h-40 w-full items-center justify-center"
                            image_url={image_url}
                        />
                        <Name
                            className="p-3 text-center"
                            name={name}
                        />
                        <div className="flex w-full items-center justify-between gap-2 px-3 pb-2">
                            <Rest rest={rest} />
                            <SetsAndReps SARs={SARs} />
                        </div>
                    </div>
                </li>
            )}
        </>
    )
}

export default Two
