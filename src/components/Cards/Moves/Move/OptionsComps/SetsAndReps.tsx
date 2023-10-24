import { FC, useState } from "react";
import { SARsProps } from "./models";

const SetsAndReps: FC<SARsProps> = ({ SARs, setSARs }) => {
  const [activeCol, setActiveCol] = useState(["1"]);

  const onValueChange = (e, set) => {
    const updatedSARs = SARs.map((row) => {
      if (row.set === set) {
        return { ...row, reps: e.target.value };
      }
      return row;
    });
    setSARs?.(updatedSARs);

    const selectedCol = SARs.find((col) => activeCol.includes(col.set));
    const nextCol = String(Number(set) + 1);

    if (selectedCol?.reps) {
      setActiveCol([...activeCol, nextCol]);
    }
  };

  return (
    <div className="flex flex-col h-1/5 shadow-top">
      <ul className="flex w-full h-full">
        <li className="h-full min-w-[60px] flex justify-center items-center">
          ست:
        </li>
        {SARs.map((values) => (
          <li
            className="flex items-center justify-center w-full shadow-right"
            key={values.set}>
            {values.set}
          </li>
        ))}
      </ul>
      <ul className="flex w-full h-full shadow-top">
        <li className="h-full min-w-[60px] flex justify-center items-center">
          تکرار:
        </li>
        {SARs.map((values, index) => (
          <input
            className="w-full text-center shadow-right focus:outline-none"
            key={index}
            disabled={!activeCol.includes(values.set)}
            value={values.reps}
            onChange={(e) => onValueChange(e, values.set)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SetsAndReps;
