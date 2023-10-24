"use client";

import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navigation: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="w-full flex flex-col top-0 sticky bg-white z-40">
      {isClient && !isDesktop ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};

export default Navigation;
