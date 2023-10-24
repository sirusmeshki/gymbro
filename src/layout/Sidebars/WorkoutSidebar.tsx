import Button from "@/components/Button";
import Image from "next/image";

const WorkoutSidebar = () => {
  return (
    <aside className="min-w-[475px] shadow-left flex flex-col h-screen bg-blue-200 absolute translate-x-full lg:fixed lg:translate-x-0">
      <ul className="bg-white overflow-y-scroll h-full w-full">Hello</ul>
      <Button
        cta="ساخت برنامه"
        className="max-h-24 mb-44 shadow-top"
        placeholder={
          <Image
            src="/icon/arrow-left.svg"
            alt="arrow left"
            width={24}
            height={24}
          />
        }
        alt="cta button"
      />
    </aside>
  );
};

export default WorkoutSidebar;
