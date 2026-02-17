import { FC } from 'react'

import Move from '../Move'

import { MovesProps } from '../../models'

const MovesList: FC<MovesProps> = ({ moves }) => {
    return (
        <>
            {moves?.map((move) => (
                <Move
                    key={move.moveId}
                    name={move.name}
                    image_url={move.image_url}
                    effective_muscle={move.effective_muscle}
                />
            ))}
        </>
    )
}

export default MovesList
