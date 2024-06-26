import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GymBro | تنظیمات نهایی - جیم برو',
    description: 'تنظیمات نهایی برنامه',
}

import PlanSettingsSidebar from '@/layout/Sidebars/PlanSettingsSidebar'

import Header from '@/components/Cards/Workouts/Plan/Settings/Header'
import PersonalInfo from '@/components/Cards/Workouts/Plan/Settings/PersonalInfo'
import PlanWorkouts from '@/components/Cards/Workouts/Plan'
import Footer from '@/components/Cards/Workouts/Plan/Settings/Footer'

const PlanPage = () => {
    return (
        <section className="layout-padding relative flex h-full w-full flex-col-reverse overflow-hidden lg:flex-row">
            <PlanSettingsSidebar />
            <div className="border-bottom oveflow-x-scroll flex w-full justify-center px-2 py-4">
                <main className=" mx-2 flex h-fit w-full min-w-[595px] scale-50 flex-col gap-4 border border-black bg-white p-4 sm:scale-75 md:w-fit md:scale-100">
                    <Header />
                    <PersonalInfo />
                    <PlanWorkouts />
                    <Footer />
                </main>
            </div>
        </section>
    )
}

export default PlanPage
