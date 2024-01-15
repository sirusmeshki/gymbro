import { useReadLocalStorage } from 'usehooks-ts'

import { Text, View } from '@react-pdf/renderer'

const Footer = () => {
    const description = useReadLocalStorage('desc')

    return (
        <View style={{ textAlign: 'right' }}>
            <Text style={{ fontSize: '12pt' }}>
                <Text style={{ fontWeight: 'light' }}>{`${
                    description ? description : ''
                }`}</Text>
                <Text style={{ fontWeight: 'bold' }}>توضیحات: </Text>
            </Text>
        </View>
    )
}

export default Footer
