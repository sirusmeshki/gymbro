import { FC, useState } from "react";

import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import Button from "@/components/Button";
import { SARsProps, WorkoutProps } from "./models";

const Submits: FC<WorkoutProps> = ({
  name,
  effective_muscle,
  image_url,
  rest,
  SARs,
  setIsOptionsOpen,
}) => {
  const [workouts, setWorkouts] = useLocalStorage<WorkoutProps[]>(
    "workouts",
    []
  );

  const [supersets, setSupersets] = useState([
    {
      name: "A",
      hoverColor: "hover:bg-blue-100",
    },
    {
      name: "B",
      hoverColor: "hover:bg-green-100",
    },
    {
      name: "C",
      hoverColor: "hover:bg-purple-100",
    },
    {
      name: "D",
      hoverColor: "hover:bg-teal-100",
    },
  ]);
  const [isSuperset, setIsSuperset] = useState(false);

  const handleAddMove = (name: string, SARs: SARsProps) => {
    const workout = {
      name,
      effective_muscle,
      image_url,
      rest,
      SARs,
      superset: null,
    };
    setWorkouts([...workouts, workout]);
    setIsOptionsOpen?.(false);
  };

  const handleAddSuperset = (superset: string) => {
    const workout = {
      name,
      effective_muscle,
      image_url,
      rest,
      SARs,
      superset,
    };
    setWorkouts([...workouts, workout]);
    setIsOptionsOpen?.(false);
  };

  return (
    <div className="flex h-[65px] shrink-0 border-top">
      <div className="relative">
        <Button
          cta="افزودن به سوپرست"
          className="bg-white border-left px-6"
          onClick={() => setIsSuperset((prev) => !prev)}
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

        {isSuperset && (
          <ul className="w-full flex flex-col justify-center items-center bg-white absolute top-0 right-0 border-left">
            <li
              className="py-2 font-extrabold border-bottom w-full hover:bg-red-500 text-center cursor-pointer"
              onClick={() => setIsSuperset((prev) => !prev)}>
              لغو
            </li>
            {supersets.map((superset, index) => (
              <li
                key={index}
                onClick={() => handleAddSuperset(superset.name)}
                className={`font-semibold text-sm p-1 border-bottom w-full text-center ${superset.hoverColor} cursor-pointer`}>
                {superset.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button
        cta="افزودن"
        placeholder={
          <Image
            src="/icon/arrow-left.svg"
            alt="arrow left"
            width={24}
            height={24}
          />
        }
        alt="cta button"
        onClick={() => handleAddMove(name, SARs)}
      />
    </div>
  );
};

export default Submits;
