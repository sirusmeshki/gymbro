'use client'

import { useIsClient, useReadLocalStorage } from 'usehooks-ts'

const PersonalInfo = () => {
    const isClient = useIsClient()

    const name = useReadLocalStorage('name')
    const weight = useReadLocalStorage('weight')
    const height = useReadLocalStorage('height')

    const isAllValid = name || weight || height

    return (
        <>
            {/* Personal Info */}

            {isAllValid && isClient ? (
                <ul className="flex w-full items-center justify-between">
                    {name ? (
                        <li className="text-xs font-semibold">
                            نام:
                            <span className="font-light">{`${name}`}</span>
                        </li>
                    ) : null}

                    {weight ? (
                        <li className="text-xs font-semibold">
                            وزن:
                            <span className="font-light">{`${weight}`}</span>
                        </li>
                    ) : null}

                    {height ? (
                        <li className="text-xs font-semibold">
                            قد:
                            <span className="font-light">{`${height}`}</span>
                        </li>
                    ) : null}
                </ul>
            ) : null}
        </>
    )
}

export default PersonalInfo
