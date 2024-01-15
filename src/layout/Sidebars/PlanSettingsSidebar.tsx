import Accordions from '@/components/Accordion/Accordions'
import ExportAsPDF from '@/components/Export/ExportAsPDF'

const PlanSettingsSidebar = () => {
    return (
        <aside className="lg:border-left sidebar flex w-auto flex-col lg:h-[calc(100dvh-218px)] lg:min-w-[481px] lg:overflow-y-auto">
            <ExportAsPDF />
            <Accordions />
        </aside>
    )
}

export default PlanSettingsSidebar
