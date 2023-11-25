"use client";

import { useSearchParams } from "next/navigation";

const PersonalInfo = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const weight = searchParams.get("weight");
  const height = searchParams.get("height");

  const isAllValid = name || weight || height;

  return (
    <>
      {/* Personal Info */}

      {isAllValid && (
        <ul className="flex items-center justify-between w-full">
          {name && (
            <li className="text-xs font-semibold">
              نام: <span className="font-light">{name}</span>
            </li>
          )}
          {weight && (
            <li className="text-xs font-semibold">
              وزن: <span className="font-light">{weight}</span>
            </li>
          )}
          {height && (
            <li className="text-xs font-semibold">
              قد: <span className="font-light">{height}</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default PersonalInfo;
