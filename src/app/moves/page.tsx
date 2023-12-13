import { Metadata } from 'next'

import WorkoutSidebar from '@/layout/Sidebars/WorkoutSidebar'
import Search from '@/components/Input/Search'
import Moves from '@/components/Cards/Moves'
import Filter from '@/components/Input/Filter'

export const metadata: Metadata = {
    title: 'GymBro | حرکات - جیم برو',
    description: 'لیست تمامی حرکات بدنسازی',
}

const MovesPage = ({
    searchParams,
}: {
    searchParams?: { move?: string; muscle?: string }
}) => {
    const moveQuery = searchParams?.move || ''
    const muscleQuery = searchParams?.muscle || ''

    return (
        <>
            <section className="layout-padding relative flex h-full">
                <WorkoutSidebar />
                <div className="flex w-full flex-col lg:mr-[480px]">
                    {/* Options */}
                    <div className="border-bottom z-20 flex h-32 w-full flex-col sm:h-20 sm:flex-row md:h-24">
                        <Search />
                        <Filter />
                    </div>

                    {/* Move List */}
                    <div className="grid h-fit w-full auto-rows-fr grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        <Moves
                            moveQuery={moveQuery}
                            muscleQuery={muscleQuery}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovesPage
