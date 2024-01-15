'use client'

import Image from 'next/image'
import { useIsClient, useReadLocalStorage } from 'usehooks-ts'

const Header = () => {
    let isClient = useIsClient()

    let code = useReadLocalStorage('code')
    let qrcode = useReadLocalStorage('qr')

    return (
        <>
            {isClient && (
                <header className="flex h-12 w-full items-center justify-between">
                    <Image
                        className="h-4 w-14"
                        src="/Logo.svg"
                        alt="logo"
                        width={0}
                        height={0}
                    />
                    {code ? (
                        <h3 className="text-lg font-black">#17BB</h3>
                    ) : null}
                    {qrcode ? (
                        <Image
                            src="/images/qr-code.png"
                            alt="plan qrcode"
                            width={50}
                            height={50}
                        />
                    ) : null}
                </header>
            )}
        </>
    )
}

export default Header
