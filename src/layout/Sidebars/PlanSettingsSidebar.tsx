import Accordions from "@/components/Accordion/Accordions";
import Button from "@/components/Button";
import Image from "next/image";

const PlanSettingsSidebar = () => {
  return (
    <aside className="min-w-[480px] flex flex-col lg:h-[calc(100dvh-44px)] absolute translate-x-full lg:fixed lg:translate-x-0 border-left">
      <Accordions />

      <Button
        cta="اکسپورت PDF"
        className="max-h-24 border-bottom w-full"
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

export default PlanSettingsSidebar;
