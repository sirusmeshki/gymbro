"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

export default function ScanSearch({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState("");

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("plan", term);
    } else {
      params.delete("plan");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <label
      className={clsx(
        "flex items-center border-bottom sm:border-b-0 justify-center w-full h-full gap-6 border-left",
        className
      )}>
      <input
        type="search"
        placeholder={placeholder}
        className="w-full h-full pr-4 text-base font-medium focus:outline-0 placeholder:text-sm placeholder:text-neutral-700"
        defaultValue={searchParams.get("plan")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <Image
        width="0"
        height="0"
        className="w-4 h-4 ml-4"
        alt="search icon"
        src="/icon/search.svg"
      />
    </label>
  );
}
