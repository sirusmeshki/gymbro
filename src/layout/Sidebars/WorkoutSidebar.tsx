import Button from "@/components/Button";
import Workouts from "@/components/Cards/Workouts";
import Image from "next/image";

const WorkoutSidebar = () => {
  return (
    <aside className="min-w-[480px] flex flex-col lg:h-[calc(100dvh-44px)] absolute translate-x-full lg:fixed lg:translate-x-0">
      <header className="min-h-[96px] w-[calc(100vw - 10px)] border-left border-bottom flex justify-center items-center">
        <Button
          cta="ایجاد تغییرات"
          className="bg-lightPurple"
          placeholder={
            <Image
              src="/icon/arrow-left.svg"
              alt="arrow left"
              width={24}
              height={24}
            />
          }
          alt="edit workouts button"
        />
      </header>
      <Workouts />
      <Button
        cta="ساخت برنامه"
        className="max-h-24 mb-44 border-top border-left"
        placeholder={
          <Image
            src="/icon/arrow-left.svg"
            alt="arrow left"
            width={24}
            height={24}
          />
        }
        alt="submit workouts button"
      />
    </aside>
  );
};

export default WorkoutSidebar;
