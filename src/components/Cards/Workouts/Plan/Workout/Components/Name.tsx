import { FC } from 'react'

import clsx from 'clsx'
import { StyleSheet, Text } from '@react-pdf/renderer'

import { NameProps } from '../../models'

const styles = StyleSheet.create({
    text: {
        fontSize: '12pt',
        fontWeight: 'bold',
    },
})

const Name: FC<NameProps> = ({ name, pdf, className, style }) => {
    return (
        <>
            {pdf ? (
                <Text style={[styles.text, style]}>{name}</Text>
            ) : (
                <h3 className={clsx('text-sm font-bold', className)}>{name}</h3>
            )}
        </>
    )
}

export default Name
