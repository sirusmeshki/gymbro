import { FC } from 'react'

import { StyleSheet, Text, View } from '@react-pdf/renderer'

import { RestProps } from '../../models'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '6pt',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '3pt',
    },
    title: {
        fontWeight: 'normal',
        fontSize: '10pt',
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: '12pt',
    },
})

const Rest: FC<RestProps> = ({ rest, pdf }) => {
    return (
        <>
            {pdf ? (
                <>
                    {rest && (
                        <View style={styles.wrapper}>
                            {/* Second */}
                            {rest.sec ? (
                                <View style={styles.container}>
                                    <Text style={styles.title}>ثانیه</Text>
                                    <Text style={styles.subTitle}>
                                        {rest.sec}
                                    </Text>
                                </View>
                            ) : null}

                            {/* Minute */}
                            {rest.min ? (
                                <View style={styles.container}>
                                    <Text style={styles.title}>دقیقه</Text>
                                    <Text style={styles.subTitle}>
                                        {rest.min}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                    )}
                </>
            ) : (
                <>
                    {rest && (
                        <div className="flex gap-2">
                            {/* Minute */}
                            {rest.min && (
                                <p className="flex items-center gap-1">
                                    <span className="font-bold">
                                        {rest.min}
                                    </span>
                                    <span className="text-xs">دقیقه</span>
                                </p>
                            )}

                            {/* Second */}
                            {rest.sec && (
                                <p className="flex items-center gap-1">
                                    <span className="font-bold">
                                        {rest.sec}
                                    </span>
                                    <span className="text-xs">ثانیه</span>
                                </p>
                            )}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default Rest
