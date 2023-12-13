'use client'

import { FC, useState } from 'react'

import Card from './Card'
import Options from './Options'

import { MoveProps } from './models'

const Move: FC<MoveProps> = ({ name, effective_muscle, image_url }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    return (
        <div className="border-bottom border-right flex flex-col bg-white">
            {isOptionsOpen ? (
                <Options
                    name={name}
                    effective_muscle={effective_muscle}
                    image_url={image_url}
                    isOptionsOpen={isOptionsOpen}
                    setIsOptionsOpen={setIsOptionsOpen}
                />
            ) : (
                <Card
                    name={name}
                    effective_muscle={effective_muscle}
                    image_url={image_url}
                    isOptionsOpen={isOptionsOpen}
                    setIsOptionsOpen={setIsOptionsOpen}
                />
            )}
        </div>
    )
}

export default Move
