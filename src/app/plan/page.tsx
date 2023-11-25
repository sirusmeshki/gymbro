import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GymBro | تنظیمات نهایی - جیم برو",
  description: "تنظیمات نهایی برنامه",
};

import PlanSettingsSidebar from "@/layout/Sidebars/PlanSettingsSidebar";

import Header from "@/components/Cards/Workouts/Settings/Header";
import PersonalInfo from "@/components/Cards/Workouts/Settings/PersonalInfo";
import PlanWorkouts from "@/components/Cards/Workouts/PlanWorkouts";
import Footer from "@/components/Cards/Workouts/Settings/Footer";

const PlanPage = () => {
  return (
    <section className="relative flex w-full h-full layout-padding">
      <PlanSettingsSidebar />
      <div className="flex justify-center w-full h-full overflow-y-auto lg:mr-[480px] p-2">
        <main className="w-[595px] mt-4 mx-2 bg-white h-fit border border-black p-4 gap-6 flex flex-col">
          <Header />
          <PersonalInfo />
          <PlanWorkouts />
          <Footer />
        </main>
      </div>
    </section>
  );
};

export default PlanPage;
