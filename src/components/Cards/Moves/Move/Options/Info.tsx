import { FC } from 'react'

import Image from 'next/image'

import { InfoProps } from '@/components/Cards/models'

const Info: FC<InfoProps> = ({ name, effective_muscle, image_url }) => {
    return (
        <div className="border-top flex h-full min-w-full items-center">
            <div className="aspect-square h-full p-1">
                <Image
                    className="h-full w-full object-contain opacity-20"
                    src={image_url ? image_url : '/icon/image-placeholder.svg'}
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
