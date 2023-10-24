import { FC, useState } from "react";

import Button from "@/components/Button";

import Info from "./OptionsComps/Info";
import RestTime from "./OptionsComps/RestTime";
import SetsAndReps from "./OptionsComps/SetsAndReps";
import Submits from "./OptionsComps/Submits";

import { MoveProps } from "./models";
import { SARProps } from "./OptionsComps/models";

const Options: FC<MoveProps> = ({
  name,
  effective_muscle,
  image_url,
  isOptionsOpen,
  setIsOptionsOpen,
}) => {
  const [sec, setSec] = useState("0");
  const [min, setMin] = useState("0");

  // SET_AND_REPS
  const [SARs, setSARs] = useState<Array<SARProps>>([
    { set: "1", reps: "0" },
    { set: "2", reps: "0" },
    { set: "3", reps: "0" },
    { set: "4", reps: "0" },
    { set: "5", reps: "0" },
  ]);

  return (
    <div className="flex flex-col w-full h-full shadow-right">
      <Button
        className="max-h-[60px]"
        icon="/icon/close.svg"
        alt="close button"
        iconHeight={18}
        iconWidth={18}
        placeholder="بستن"
        onClick={() => setIsOptionsOpen?.(false)}
      />
      <Info
        name={name}
        effective_muscle={effective_muscle}
        image_url={image_url}
      />
      <RestTime sec={sec} min={min} setSec={setSec} setMin={setMin} />
      <SetsAndReps SARs={SARs} setSARs={setSARs} />
      <Submits />
    </div>
  );
};

export default Options;
