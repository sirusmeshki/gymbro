import { FC, useState } from "react";

import Button from "@/components/Button";
import Image from "next/image";

import { WorkoutProps } from "../Moves/Move/Options/models";

const Workout: FC<WorkoutProps> = ({
  name,
  effective_muscle,
  image_url,
  SARs,
  superset,
  rest,
}) => {
  const [supersets, setSupersets] = useState([
    {
      name: "A",
      color: "bg-blue-100",
    },
    {
      name: "B",
      color: "bg-green-100",
    },
    {
      name: "C",
      color: "bg-purple-100",
    },
    {
      name: "D",
      color: "bg-teal-100",
    },
  ]);
  const selectedSuperset = supersets.find((row) => row.name === superset);

  return (
    <li
      className={`flex items-center justify-center h-24 border-bottom ${selectedSuperset?.color}`}>
      <div className="h-full p-1 aspect-square">
        <Image
          className="object-contain w-full h-full"
          src={"/icon/arrow-left.svg"}
          alt={`${image_url} poster`}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col w-full h-full p-2">
        {/* Move Info */}
        <div className="flex flex-col w-full h-full">
          <h4 className="text-base font-bold text-neutral-900">{name}</h4>
          <h5 className="text-sm font-medium text-neutral-700">
            {effective_muscle}
          </h5>
        </div>

        <div className="flex flex-row-reverse gap-[16px]">
          {/* Multipe Sets With Different Reps | 1-12 2-8 3-14 */}
          {!SARs.custom?.length && (
            <>
              {SARs.custom?.map((row) => (
                <div key={row.set}>
                  <p>{row.set}-</p>
                  <p>{row.reps}</p>
                </div>
              ))}
            </>
          )}

          {/* Single Set and Reps | 3*12 */}
          {SARs.single && (
            <div className="flex flex-row-reverse gap-[2px]">
              <p className="font-semibold">{SARs.single.sets}x</p>
              <p className="font-light">{SARs.single.reps}</p>
            </div>
          )}

          {/* Rest */}
          {rest && (
            <div className="flex gap-2">
              {rest.min > 0 && (
                <p className="flex justify-center items-center gap-1 font-bold">
                  {rest.min}
                  <span className="text-xs font-medium">دقیقه</span>
                </p>
              )}
              {rest.sec > 1 && (
                <p className="flex justify-center items-center gap-1 font-bold">
                  {rest.sec}
                  <span className="text-xs font-medium">ثانیه</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Workout;

// {/* Workout Options | Edit - Delete */}
// <Button
//   className="max-w-[28px] border-right"
//   icon="/icon/options.svg"
//   alt="options"
//   placeholder={
//     <Image src="/icon/arrow-left.svg" width={18} height={18} alt="icon" />
//   }
// />
