import { FC, useState } from "react";

import Button from "@/components/Button";
import { MoveProps, RestProps, SARsProps } from "./models";
import Rest from "./Rest";
import SetsAndReps from "./SetsAndReps";
import Submits from "./Submits";
import Info from "./Info";

const Options: FC<MoveProps> = ({
  name,
  effective_muscle,
  image_url,
  setIsOptionsOpen,
}) => {
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  // SET_AND_REPS
  const [SARs, setSARs] = useState<SARsProps>({
    custom: [],
    single: { sets: "", reps: "" },
  });

  return (
    <div className="flex flex-col w-full h-full">
      <Button
        className="max-h-[60px] shrink-0"
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
      <Rest sec={sec} setSec={setSec} min={min} setMin={setMin} />
      <SetsAndReps SARs={SARs} setSARs={setSARs} />
      <Submits
        name={name}
        effective_muscle={effective_muscle}
        image_url={image_url}
        SARs={SARs}
        rest={{ min, sec }}
        setIsOptionsOpen={setIsOptionsOpen}
      />
    </div>
  );
};

export default Options;
