"use client";

import Image from "next/image";
import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";

type SearchProps = {
  name: string;
  className?: string;
  placeholder: string;
  searchValue: string | null;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const Search: FC<SearchProps> = ({
  name,
  className,
  placeholder,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center w-full h-full gap-6 shadow-bottom",
        className
      )}>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        className="w-full h-full pr-4 text-base font-medium focus:outline-0 placeholder:text-sm placeholder:text-neutral-700"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Image
        width="0"
        height="0"
        className="w-4 h-4 ml-4"
        alt="search icon"
        src="/icon/search.svg"
      />
    </div>
  );
};

export default Search;
