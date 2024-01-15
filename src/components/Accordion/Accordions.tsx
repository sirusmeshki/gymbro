'use client'

import Accordion from '@/components/Accordion/Accordion'
import Option from '@/components/Accordion/Option'

// List of accordions
import { accordions } from './models'
import { useIsClient } from 'usehooks-ts'

const Accordions = () => {
    const isClient = useIsClient()

    return (
        <>
            {isClient &&
                accordions.map((accordion, index) => (
                    <Accordion title={accordion.name} key={index}>
                        {accordion.options.map((option) => (
                            <Option
                                key={option.query}
                                query={option.query}
                                title={option.title}
                                type={option.type}
                                options={option.options}
                                placeholder={option.placeholder}
                            />
                        ))}
                    </Accordion>
                ))}
        </>
    )
}

export default Accordions
