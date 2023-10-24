"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import WorkoutSidebar from "@/layout/Sidebars/WorkoutSidebar";
import Search from "@/components/Input/Search";
import Selectbox from "@/components/Input/Selectbox";
import Moves from "@/components/Cards/Moves";

const MovesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");

  const router = useRouter();

  useEffect(() => {
    router.push(`?move=${searchValue}&muscle=${selectedMuscle}`);
  }, [searchValue, selectedMuscle, router]);

  return (
    <section className="relative flex h-full layout-padding">
      <WorkoutSidebar />
      <div className="flex flex-col w-full lg:mr-[480px]">
        <div className="flex flex-col sm:flex-row mb-[1px] w-full h-32 sm:h-20 md:h-24 z-20">
          <Search
            placeholder="نام حرکت را وارد کنید"
            name="move"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <Selectbox
            selectedMuscle={selectedMuscle}
            setSelectedMuscle={setSelectedMuscle}
          />
        </div>
        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[1px] bg-[#e4e4e4] shadow-bottom">
          <Moves />
        </div>
      </div>
    </section>
  );
};

export default MovesPage;
