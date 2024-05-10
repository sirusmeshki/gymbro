import { FC } from 'react'
import Image from 'next/image'

import { MoveProps } from '../../models'

const Card: FC<MoveProps> = ({
    name,
    effective_muscle,
    image_url,
    onOpenOptions,
}) => {
    return (
        <>
            <div
                className="group h-full w-full cursor-pointer"
                onClick={() => onOpenOptions?.()}>
                {/* Move image */}
                <div className="border-bottom flex aspect-square items-center justify-center">
                    <Image
                        className="--h-fit --w-full h-10 w-10 object-contain opacity-20"
                        src={
                            image_url
                                ? image_url
                                : '/icon/image-placeholder.svg'
                        }
                        alt={`عکس ${name}`}
                        width={10}
                        height={10}
                        priority
                    />
                </div>
                {/* Move info */}
                <footer className="flex h-16 items-center justify-between gap-1 px-4 group-hover:bg-lightPurple">
                    <h4 className="text-sm font-bold text-neutral-900 sm:text-sm">
                        {name}
                    </h4>
                    <h5 className="text-xs font-medium text-neutral-700">
                        {effective_muscle}
                    </h5>
                </footer>
            </div>
        </>
    )
}

export default Card
