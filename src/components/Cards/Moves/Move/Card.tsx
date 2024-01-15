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
                <div className="border-bottom aspect-square p-40">
                    <Image
                        className="h-fit w-full object-contain"
                        src={image_url ? image_url : '/icon/weight.svg'}
                        alt={`عکس ${name}`}
                        width={10}
                        height={10}
                    />
                </div>
                {/* Move info */}
                <footer className="flex h-16 items-center justify-between gap-1 px-4 group-hover:bg-blue-100">
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
