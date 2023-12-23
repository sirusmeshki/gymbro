'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const Header = () => {
    const searchParams = useSearchParams()
    let code = searchParams.get('code')
    let qrcode = searchParams.get('qr')

    return (
        <header className="flex h-12 w-full items-center justify-between">
            <Image
                className="h-4 w-14"
                src="/Logo.svg"
                alt="logo"
                width={0}
                height={0}
            />
            {code === 'true' && <h3 className="text-lg font-black">#17BB</h3>}
            {qrcode === 'true' && (
                <Image
                    src="/images/qr-code.png"
                    alt="plan qrcode"
                    width={50}
                    height={50}
                />
            )}
        </header>
    )
}

export default Header
