import { FC } from 'react'

import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { SetsAndRepsProps } from '../../models'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '60px',
        gap: '2pt',
    },
    sets: {
        fontWeight: 'bold',
        fontSize: '12pt',
    },
    reps: {
        fontWeight: 'light',
        fontSize: '12pt',
    },
})

const SetsAndReps: FC<SetsAndRepsProps> = ({ SARs, pdf }) => {
    return (
        <>
            {pdf ? (
                <>
                    {/* Single Set and Reps | 3*12 */}
                    <View style={styles.wrapper}>
                        <Text style={styles.sets}>{SARs.single?.sets}x</Text>
                        <Text style={styles.reps}>{SARs.single?.reps}</Text>
                    </View>
                </>
            ) : (
                <>
                    {/* Single Set and Reps | 3*12 */}
                    {SARs.single && (
                        <div className="flex flex-row-reverse gap-[2px]">
                            <p className="font-semibold">{SARs.single.sets}x</p>
                            <p className="font-light">{SARs.single.reps}</p>
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default SetsAndReps
// {/* Multipe Sets With Different Reps | 1-12 2-8 3-14 */}
// {!SARs.custom?.length && (
//     <>
//         {SARs.custom?.map((row) => (
//             <div key={row.set}>
//                 <p>{row.set}-</p>
//                 <p>{row.reps}</p>
//             </div>
//         ))}
//     </>
// )}
