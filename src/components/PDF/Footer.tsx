import { useReadLocalStorage } from 'usehooks-ts'

import { Text, View } from '@react-pdf/renderer'
import { tw } from './utils'

const Footer = () => {
    const description = useReadLocalStorage('desc')

    return (
        <View style={tw('text-right')}>
            <Text style={tw('text-sm')}>
                <Text style={tw('font-light')}>{`${
                    description ? description : ''
                }`}</Text>
                <Text style={tw('font-bold')}>توضیحات: </Text>
            </Text>
        </View>
    )
}

export default Footer
