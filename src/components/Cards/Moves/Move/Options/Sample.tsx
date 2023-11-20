import { FC, useState } from "react";
import { SARsProps } from "../OptionsComp/models";

const SetsAndReps: FC<SARsProps> = ({ SARs, setSARs }) => {
  const onValueChange = (e, set) => {
    const updatedSARs = SARs.map((row) => {
      if (row.set === set) {
        return { ...row, reps: e.target.value };
      }
      return row;
    });
    setSARs?.(updatedSARs);
  };

  return (
    <div className="flex flex-col h-1/5 border-top">
      <ul className="flex w-full h-full">
        <li className="h-full min-w-[60px] flex justify-center items-center">
          ست:
        </li>
        {SARs.map((values) => (
          <li
            className="flex items-center justify-center w-full border-left"
            key={values.set}>
            {values.set}
          </li>
        ))}
      </ul>
      <ul className="flex w-full h-full border-top">
        <li className="h-full min-w-[60px] flex justify-center items-center">
          تکرار:
        </li>
        {SARs.map((values, index) => (
          <input
            className="w-full text-center border-left focus:outline-none"
            key={index}
            type="text"
            value={values.reps}
            placeholder="0"
            onChange={(e) => onValueChange(e, values.set)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SetsAndReps;
//Custome Reps
// const [activeCol, setActiveCol] = useState(["1", "2"]);
// const selectedCol = SARs.find((col) => activeCol.includes(col.set));
// const nextCol = String(Number(set) + 1);

// if (selectedCol?.reps) {
//   setActiveCol([...activeCol, nextCol]);
// }
