import { useReadLocalStorage } from 'usehooks-ts'

import { Text, View } from '@react-pdf/renderer'
import { tw } from './utils'

const PersonalInfo = () => {
    const name = useReadLocalStorage('name')
    const weight = useReadLocalStorage('weight')
    const height = useReadLocalStorage('height')

    const personalInfo = name || weight || height

    return (
        <>
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
                                    style={tw('font-light')}>{`${name}`}</Text>
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
        </>
    )
}

export default PersonalInfo
