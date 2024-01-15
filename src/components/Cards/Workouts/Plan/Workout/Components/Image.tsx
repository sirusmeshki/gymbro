import { FC } from 'react'

import Image from 'next/image'
import { Image as ImagePDF, StyleSheet, Text, View } from '@react-pdf/renderer'
import { useReadLocalStorage } from 'usehooks-ts'

import { MoveImageProps } from '../../models'

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: '1 / 1',
    },
})

const MoveImage: FC<MoveImageProps> = ({
    image_url,
    pdf,
    className,
    height,
}) => {
    const isImage = useReadLocalStorage<boolean>('image')

    return (
        <>
            {pdf ? (
                <>
                    {isImage ? (
                        <Text></Text>
                    ) : // <View
                    //     style={[
                    //         styles.image,
                    //         { height: height, minWidth: height },
                    //     ]}>
                    //     <ImagePDF src={'./logo.png'} />
                    // </View>
                    null}
                </>
            ) : (
                <>
                    {isImage ? (
                        <div className={className}>
                            <Image
                                className="h-14 w-14"
                                src={'/logo.svg'}
                                alt={`image`}
                                width={100}
                                height={100}
                            />
                        </div>
                    ) : null}
                </>
            )}
        </>
    )
}

export default MoveImage
