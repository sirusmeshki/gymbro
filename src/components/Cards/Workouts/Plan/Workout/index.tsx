import { FC } from 'react'
import { WorkoutProps } from '../models'
import One from './Themes/One'
import Two from './Themes/Two'

const Workout: FC<WorkoutProps> = ({
    index,
    name,
    rest,
    SARs,
    image_url,
    pdf,
    design,
}) => {
    return (
        <>
            {design === '1' && (
                <One
                    index={index}
                    name={name}
                    rest={rest}
                    SARs={SARs}
                    image_url={image_url}
                    pdf={pdf}
                />
            )}
            {design === '2' && (
                <Two
                    index={index}
                    name={name}
                    rest={rest}
                    SARs={SARs}
                    image_url={image_url}
                    pdf={pdf}
                />
            )}
        </>
    )
}

export default Workout
