import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'GymBro | تنظیمات نهایی - جیم برو',
    description: 'تنظیمات نهایی برنامه',
}

import PlanSettingsSidebar from '@/layout/Sidebars/PlanSettingsSidebar'

import Header from '@/components/Cards/Workouts/Settings/Header'
import PersonalInfo from '@/components/Cards/Workouts/Settings/PersonalInfo'
import PlanWorkouts from '@/components/Cards/Workouts/PlanWorkouts'
import Footer from '@/components/Cards/Workouts/Settings/Footer'

const PlanPage = () => {
    return (
        <section className="layout-padding relative flex h-full w-full flex-col-reverse lg:flex-row">
            <PlanSettingsSidebar />
            <div className="border-bottom lg:border-right flex h-fit min-h-screen w-full justify-center overflow-y-auto bg-blue-50 p-2 lg:mr-[480px] lg:border-b-0">
                <main className="mx-2 mt-4 flex h-fit w-[595px] flex-col gap-6 border border-black bg-white p-4">
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
