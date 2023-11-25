import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Tip = ({ className }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={clsx(
        `
        flex
        justify-center 
        items-center 
        relative
        w-full
        h-10
        bg-lightGreen 
        overflow-hidden
        group
        border-bottom
        lg:border-b-0`,
        className && className,
        isVisible ? "flex" : "hidden"
      )}>
      <p className="mx-3 text-xs font-semibold text-center text-neutral-800 sm:text-sm">
        برای ذخیره برنامه ورزشی وارد حساب کاربری شوید
      </p>
    </div>
  );
};

export default Tip;
{
  /* <div
onClick={() => setIsVisible(false)}
className={clsx(
  `bg-blue-100
   w-full
   h-full
   opacity-95
   transition
   flex
   justify-center
   cursor-pointer 
   items-center
   absolute 
   translate-y-full
   group-hover:translate-y-0
   lg:hidden
  `
)}>
<Image
  src="/icon/close.svg"
  alt="close button"
  width={18}
  height={18}
/>
</div> */
}
