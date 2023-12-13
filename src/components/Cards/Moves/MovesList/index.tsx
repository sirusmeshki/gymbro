import { FC } from 'react'

import Move from '../Move'

import { MovesProps } from '../Move/models'

const MovesList: FC<MovesProps> = ({ moves }) => {
    return (
        <>
            {moves?.map((move) => (
                <Move
                    key={move.id}
                    name={move.name}
                    image_url={move.image_url}
                    effective_muscle={move.effective_muscle}
                />
            ))}
        </>
    )
}

export default MovesList
