import { useReadLocalStorage } from 'usehooks-ts'

import { Image, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '48pt',
        width: '100%',
    },

    code: {
        fontSize: '16pt',
        fontWeight: 'black',
    },

    qr: {
        width: '50pt',
        height: '50pt',
    },
})

const Header = () => {
    const qr = useReadLocalStorage('qr')
    const code = useReadLocalStorage('code')

    return (
        <View style={styles.container}>
            <Image style={{ width: '54pt' }} src={'/logo.png'} />
            {code ? <Text style={styles.code}>{`#17BB`}</Text> : null}
            {qr ? <Image style={styles.qr} src={'/qr.png'} /> : null}
        </View>
    )
}

export default Header
