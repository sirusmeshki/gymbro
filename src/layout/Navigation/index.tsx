'use client'

import { FC } from 'react'

import { useIsClient, useMediaQuery } from 'usehooks-ts'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navigation: FC = () => {
    const isDesktop = useMediaQuery('(min-width: 1200px)')
    const isClient = useIsClient()

    return (
        <nav className="sticky top-0 z-40 flex w-full flex-col bg-white">
            {isClient && !isDesktop ? <MobileNav /> : <DesktopNav />}
        </nav>
    )
}

export default Navigation
