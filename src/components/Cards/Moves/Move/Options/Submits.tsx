import { FC, useState } from "react";

import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

import Button from "@/components/Button";
import { SARsProps, WorkoutProps } from "./models";

import {
  onErrorToast,
  onSuccessToast,
  onSetsEmptyToast,
  onRepsEmptyToast,
  onProgressToast,
} from "./Toasts";

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

  const handleAddMove = (name: string, SARs: SARsProps) => {
    let isSetsEmpty = SARs.single?.sets === "";
    let isRepsEmpty = SARs.single?.reps === "";

    const workout = {
      name,
      effective_muscle,
      image_url,
      rest,
      SARs,
      superset: null,
    };

    const isAlreadyAdded = workouts.find((workout) => workout.name === name);

    if (!isAlreadyAdded) {
      if (isSetsEmpty) {
        onSetsEmptyToast();
      }
      if (isRepsEmpty) {
        onRepsEmptyToast();
      }

      if (!isSetsEmpty && !isRepsEmpty) {
        setWorkouts([...workouts, workout]);
        onSuccessToast();
        setIsOptionsOpen?.(false);
      }
    } else {
      onErrorToast();
      setIsOptionsOpen?.(false);
    }
  };

  const [supersets, setSupersets] = useState([
    { name: "A", hoverColor: "hover:bg-blue-100" },
    { name: "B", hoverColor: "hover:bg-green-100" },
    { name: "C", hoverColor: "hover:bg-purple-100" },
    { name: "D", hoverColor: "hover:bg-teal-100" },
  ]);
  //Superset modal
  const [isSuperset, setIsSuperset] = useState(false);

  const handleAddSuperset = (superset: string) => {
    onProgressToast();
    // const workout = {
    //   superset: [{ name, effective_muscle, image_url, rest, SARs, superset }],
    // };
    // setWorkouts([...workouts, workout]);
    setIsOptionsOpen?.(false);
  };

  return (
    <div className="flex h-[65px] shrink-0 border-top">
      <div className="relative">
        <Button
          cta="افزودن به سوپرست"
          className="px-6 bg-white border-left"
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
          <ul className="absolute top-0 right-0 flex flex-col items-center justify-center w-full bg-white border-left">
            <li
              className="w-full py-2 font-extrabold text-center cursor-pointer border-bottom hover:bg-red-500"
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