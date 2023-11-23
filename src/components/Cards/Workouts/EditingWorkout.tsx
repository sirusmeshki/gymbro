// import { FC, useState } from "react";

// import Button from "@/components/Button";
// import Image from "next/image";

// import { SARsProps, WorkoutProps } from "../Moves/Move/Options/models";
// import NumberInput from "@/components/Input/NumberInput";

// const EditingWorkout: FC<WorkoutProps> = ({
//   name,
//   effective_muscle,
//   SARs,
//   superset,
//   rest,
// }) => {
//   const [supersets, setSupersets] = useState([
//     { name: "A", color: "bg-blue-100" },
//     { name: "B", color: "bg-green-100" },
//     { name: "C", color: "bg-purple-100" },
//     { name: "D", color: "bg-teal-100" },
//   ]);
//   const selectedSuperset = supersets.find((row) => row.name === superset);

//   const [editSARs, setEditSARs] = useState<SARsProps>({
//     custom: [],
//     single: { sets: 1, reps: 0 },
//   });

//   return (
//     <li
//       className={`flex items-center justify-center h-24 border-bottom ${selectedSuperset?.color}`}>
//       <div className="h-full w-10 border-left">
//         {/* Workout Option | Move*/}
//         <Button
//           icon="/icon/menu.svg"
//           alt="options"
//           placeholder={
//             <Image
//               src="/icon/arrow-left.svg"
//               width={18}
//               height={18}
//               alt="icon"
//             />
//           }
//         />
//       </div>
//       <div className="flex  w-full h-full p-2">
//         {/* Move Info */}
//         <div className="flex flex-col w-full h-full">
//           <h4 className="text-base font-bold text-neutral-900">{name}</h4>
//           <h5 className="text-sm font-medium text-neutral-700">
//             {effective_muscle}
//           </h5>
//         </div>

//         {/* Single Set and Reps | 3*12 */}
//         {SARs.single && (
//           <div className="flex flex-row-reverse gap-[2px]">
//             <p className="font-semibold">{SARs.single.sets}</p>
//             <p>x</p>
//             <NumberInput
//               value={SARs.single.reps}
//               placeholder={SARs.single.reps.toString()}
//               setValue={(e) =>
//                 setEditSARs?.({
//                   ...SARs,
//                   single: { sets: e.target.value, reps },
//                 })
//               }
//             />
//             {/* {SARs.single.reps} */}
//           </div>
//         )}
//       </div>
//     </li>
//   );
// };

// export default EditingWorkout;

// {/* Workout Options | Edit - Delete */}
// <Button
//   className="max-w-[28px] border-right"
//   icon="/icon/options.svg"
//   alt="options"
//   placeholder={
//     <Image src="/icon/arrow-left.svg" width={18} height={18} alt="icon" />
//   }
// />

// <div className="flex flex-row-reverse gap-[16px]">
//   {/* Multipe Sets With Different Reps | 1-12 2-8 3-14 */}
//   {!SARs.custom?.length && (
//     <>
//       {SARs.custom?.map((row) => (
//         <div key={row.set}>
//           <p>{row.set}-</p>
//           <p>{row.reps}</p>
//         </div>
//       ))}
//     </>
//   )}

//           {/* Rest */}
//   {rest && (
//     <div className="flex gap-2">
//       {/* {rest.min > 0 && (
//         <p className="flex justify-center items-center gap-1 font-bold">
//           {rest.min}
//           <NumberInput value={rest.min} setValue={} />
//         </p>
//       )} */}
//       {rest.sec > 1 && (
//         <p className="flex justify-center items-center gap-1 font-bold">
//           {rest.sec}
//           <span className="text-xs font-medium">ثانیه</span>
//         </p>
//       )}
//     </div>
//   )}
