'use client'

import { FC } from 'react'

import { useBoolean } from 'usehooks-ts'

import Card from './Card'
import Options from './Options'

import { MoveProps } from './models'

const Move: FC<MoveProps> = ({ name, effective_muscle, image_url }) => {
    const { value, setTrue, setFalse } = useBoolean(false)

    return (
        <div className="border-bottom border-right flex flex-col bg-white">
            {value ? (
                <Options
                    name={name}
                    effective_muscle={effective_muscle}
                    image_url={image_url}
                    onCloseOptions={setFalse}
                />
            ) : (
                <Card
                    name={name}
                    effective_muscle={effective_muscle}
                    image_url={image_url}
                    onOpenOptions={setTrue}
                />
            )}
        </div>
    )
}

export default Move
