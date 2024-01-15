import { useReadLocalStorage } from 'usehooks-ts'

import { StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    title: {
        fontWeight: 'semibold',
        fontSize: '12pt',
    },

    subTitle: {
        fontWeight: 'light',
    },
})

const PersonalInfo = () => {
    const name = useReadLocalStorage('name')
    const weight = useReadLocalStorage('weight')
    const height = useReadLocalStorage('height')

    const personalInfo = name || weight || height

    return (
        <>
            {personalInfo ? (
                <View style={styles.container}>
                    {/* li */}
                    {/* User name */}
                    {name ? (
                        <View style={styles.title}>
                            <Text>
                                <Text style={styles.subTitle}>{`${name}`}</Text>
                                نام:
                            </Text>
                        </View>
                    ) : null}

                    {/* User weight */}
                    {weight ? (
                        <View style={styles.title}>
                            <Text>
                                <Text
                                    style={styles.subTitle}>{`${weight}`}</Text>
                                وزن:
                            </Text>
                        </View>
                    ) : null}

                    {/* User height */}
                    {height ? (
                        <View style={styles.title}>
                            <Text>
                                <Text
                                    style={styles.subTitle}>{`${height}`}</Text>
                                قد:
                            </Text>
                        </View>
                    ) : null}
                </View>
            ) : null}
        </>
    )
}

export default PersonalInfo
