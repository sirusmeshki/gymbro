"use client";

import { useReadLocalStorage } from "usehooks-ts";

import { WorkoutProps } from "@/components/Cards/Moves/Move/Options/models";
import PlanSettingsSidebar from "@/layout/Sidebars/PlanSettingsSidebar";

const Page = () => {
  const workouts = useReadLocalStorage<WorkoutProps[]>("workouts");

  return (
    <section className="relative flex w-full h-full layout-padding">
      {/* <div className="w-[480px] bg-red-500 lg:h-[calc(100dvh-44px)]"></div> */}
      <PlanSettingsSidebar />
      <div className="flex flex-col w-full h-full overflow-y-scroll bg-red-500 lg:mr-[480px]">
        Hey
      </div>
    </section>
  );
};

export default Page;
