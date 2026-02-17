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
        display: 'flex',
        flexDirection: 'row-reverse',
        borderBottom: '1pt solid black',
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '80pt',
        padding: '10pt',
    },

    detailsContainer: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2pt',
    },

    sarContainer: {
        width: '48pt',
    },
})

const One: FC<WorkoutProps> = ({ index, name, rest, SARs, image_url, pdf }) => {
    const counter = useReadLocalStorage<Boolean>('counter')
    const odd = index % 2 === 0

    return (
        <>
            {pdf ? (
                <View
                    style={[
                        styles.wrapper,
                        { backgroundColor: odd ? 'white' : '#fafafa' },
                    ]}>
                    {/* Counter  */}
                    {counter ? (
                        <View style={styles.counter}>
                            <Text>{index + 1}</Text>
                        </View>
                    ) : null}

                    {/* Image */}
                    <MoveImage height="60pt" image_url={image_url} pdf />

                    {/* Infos */}
                    <View style={styles.infosContainer}>
                        <Name name={name} pdf />

                        {/* Details = Rest / SAR */}
                        <View style={styles.detailsContainer}>
                            <Rest rest={rest} pdf />

                            <View style={styles.sarContainer}>
                                <SetsAndReps SARs={SARs} pdf />
                            </View>
                        </View>
                    </View>
                </View>
            ) : (
                <li className="border-bottom flex last:border-0">
                    {counter && (
                        <span className="border-left flex w-6 items-center justify-center font-bold">
                            {index + 1}
                        </span>
                    )}
                    <MoveImage
                        height=""
                        className="border-left flex aspect-square h-20 items-center justify-center"
                        image_url={image_url}
                    />
                    <div className="flex w-full items-center justify-between gap-20 p-3">
                        <Name name={name} />
                        <div className="flex items-center justify-center gap-2">
                            <Rest rest={rest} />
                            <div className="w-12">
                                <SetsAndReps SARs={SARs} />
                            </div>
                        </div>
                    </div>
                </li>
            )}
        </>
    )
}

export default One
