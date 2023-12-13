import Image from "next/image";

import Accordions from "@/components/Accordion/Accordions";
import Button from "@/components/Button";

const PlanSettingsSidebar = () => {
  return (
    <aside
      className="
      border-left
      flex
      w-full
      flex-col
      overflow-y-scroll
      lg:fixed
      lg:h-[calc(100dvh-44px)]
      lg:w-auto
      lg:min-w-[480px]
      lg:translate-x-0
      "
    >
      <Accordions />

      <Button
        cta="اکسپورت PDF"
        className="border-bottom max-h-24 min-h-[96px] w-full"
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
