"use client";

import { useSearchParams } from "next/navigation";

const Footer = () => {
  const searchParams = useSearchParams();
  let description = searchParams.get("desc");

  return (
    <footer>
      <p className="text-sm">
        <span className="font-bold">توضیحات: </span>
        <span className="font-light">{description}</span>
      </p>
    </footer>
  );
};

export default Footer;
