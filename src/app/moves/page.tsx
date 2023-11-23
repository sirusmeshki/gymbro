import { Metadata } from "next";

import WorkoutSidebar from "@/layout/Sidebars/WorkoutSidebar";
import Search from "@/components/Input/Search";
import Selectbox from "@/components/Input/Selectbox";
import Moves from "@/components/Cards/Moves";

import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "GymBro | حرکات - جیم برو",
  description: "لیست تمامی حرکات بدنسازی",
};

const MovesPage = ({
  searchParams,
}: {
  searchParams?: { move?: string; muscle?: string };
}) => {
  const moveQuery = searchParams?.move || "";
  const muscleQuery = searchParams?.muscle || "";

  return (
    <>
      <section className="relative flex h-full layout-padding">
        <WorkoutSidebar />
        <div className="flex flex-col w-full lg:mr-[480px]">
          <div className="z-20 flex flex-col w-full h-32 sm:flex-row sm:h-20 md:h-24 border-bottom">
            <Search placeholder="نام حرکت را وارد کنید" />
            <Selectbox />
          </div>
          <div className="grid w-full grid-cols-1 auto-rows-fr h-fit sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Moves moveQuery={moveQuery} muscleQuery={muscleQuery} />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovesPage;
