'use client'

import Accordions from '@/components/Accordion/Accordions'
import ExportAsPDF from '@/components/Export/ExportAsPDF'

const PlanSettingsSidebar = () => {
    return (
        <aside
            className="
                sidebar
                flex
                w-full
                flex-col
                overflow-y-auto
                lg:fixed
                lg:h-[calc(100dvh-44px)]
                lg:w-auto
                lg:min-w-[480px]
                lg:translate-x-0
             ">
            <Accordions />
            <ExportAsPDF />
        </aside>
    )
}

export default PlanSettingsSidebar
