import { FC } from 'react'

import Image from 'next/image'

import { InfoProps } from '../models'

const Info: FC<InfoProps> = ({ name, effective_muscle, image_url }) => {
    return (
        <div className="border-top flex h-full min-w-full items-center">
            <div className="aspect-square h-full p-1">
                <Image
                    className="h-full w-full object-contain"
                    src="/icon/arrow.svg"
                    alt={`${image_url} poster`}
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex h-full w-full flex-col px-2 py-3">
                <h4 className="text-sm font-bold text-neutral-900">{name}</h4>
                <h5 className="text-xs font-medium text-neutral-700">
                    {effective_muscle}
                </h5>
            </div>
        </div>
    )
}

export default Info
