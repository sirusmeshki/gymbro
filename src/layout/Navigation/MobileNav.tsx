import { FC } from 'react'

import Buttons from './Buttons'
import Header from './Header'
import Tip from './Tip'

const MobileNav: FC = () => {
    return (
        <section className="flex flex-col">
            <Tip className="max-h-12" />
            <Header />
            <Buttons className="fixed bottom-0" />
        </section>
    )
}

export default MobileNav
