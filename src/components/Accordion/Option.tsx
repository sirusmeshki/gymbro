"use client";

import { FC, useState } from "react";

import Image from "next/image";
import clsx from "clsx";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useDebouncedCallback } from "use-debounce";

type OptionProps = {
  title: string;
  query: string;
  // type: "input" | "checkbox";
  isInput: boolean;
  inputType?: string;
  placeholder?: string;
  isSelected?: boolean | null;
};

const Option: FC<OptionProps> = ({
  title,
  query,
  isInput,
  placeholder,
  inputType,
  isSelected,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleChange = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(query, term);
    } else {
      params.delete(query);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleCheckbox = () => {
    setIsOptionSelected((prev) => !prev);
    const params = new URLSearchParams(searchParams);

    if (!isOptionSelected) {
      params.set(query, "true");
    } else {
      params.delete(query);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center border-top h-14">
      <label className="font-semibold text-neutral-600 min-w-[100px] pr-4">
        {title}:
      </label>

      {isInput && (
        <input
          type={inputType}
          className="w-full h-full focus:outline-none border-right  focus:border-black focus:bg-lightGreen pr-4 text-black placeholder:text-neutral-600"
          placeholder={placeholder}
          defaultValue={searchParams.get(query)?.toString()}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      )}

      {!isInput && (
        <div
          className={clsx(
            isOptionSelected && "bg-lightGreen",
            "cursor-pointer w-full h-full group border-right flex justify-center hover:bg-neutral-100"
          )}
          onClick={() => handleCheckbox()}>
          <Image
            className={clsx(!isOptionSelected && "hidden", "group-hover:block")}
            src="/icon/tik.svg"
            alt="tik icon"
            width={24}
            height={24}
          />
        </div>
      )}
    </div>
  );
};

export default Option;
