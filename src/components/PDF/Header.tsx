import { useReadLocalStorage } from 'usehooks-ts'

import { Image, Text, View } from '@react-pdf/renderer'
import { tw } from './utils'

const Header = () => {
    const qr = useReadLocalStorage('qr')
    const code = useReadLocalStorage('code')

    return (
        <View
            style={tw(
                'flex flex-row-reverse h-12 w-full items-center justify-between'
            )}>
            <Image style={tw('w-16')} src={'/logo.png'} />

            {code ? (
                <Text style={tw('text-lg font-black')}>{`#${code}`}</Text>
            ) : null}
            {qr ? <Image style={tw('w-[50] h-[50]')} src={'/qr.png'} /> : null}
        </View>
    )
}

export default Header
