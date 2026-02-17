import { Metadata } from 'next'
import { Suspense } from 'react'

import Loading from './loading'
import WorkoutSidebar from '@/layout/Sidebars/WorkoutSidebar'
import Search from '@/components/Input/Search'
import Moves from '@/components/Cards/Moves'
import Filter from '@/components/Input/Filter'

export const metadata: Metadata = {
    title: 'GymBro | حرکات - جیم برو',
    description: 'لیست تمامی حرکات بدنسازی',
}

const MovesPage = async ({
    searchParams,
}: {
    searchParams?: Promise<{ move?: string; muscle?: string }>
}) => {
    const { move = '', muscle = '' } = (await searchParams) ?? {}

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
                    <Suspense fallback={<Loading />}>
                        <div className="grid h-fit w-full auto-rows-fr grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
                            <Moves
                                moveQuery={move}
                                muscleQuery={muscle}
                            />
                        </div>
                    </Suspense>
                </div>
            </section>
        </>
    )
}

export default MovesPage
