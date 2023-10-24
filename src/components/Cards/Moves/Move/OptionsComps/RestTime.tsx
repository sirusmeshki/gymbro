import { FC } from "react";
import Time from "../../../../Input/Time";

type TimeProps = {
  sec: string;
  min: string;
  setSec: React.Dispatch<React.SetStateAction<string>> | undefined;
  setMin: React.Dispatch<React.SetStateAction<string>> | undefined;
};

const RestTime: FC<TimeProps> = ({ sec, min, setSec, setMin }) => {
  return (
    <div className="flex items-center justify-center pr-2 h-1/6 shadow-top">
      <h4 className="w-full">استراحت :</h4>
      <div className="flex h-full">
        <Time title="ثانیه" value={sec} setValue={setSec} />
        <Time title="دقیقه" value={min} setValue={setMin} />
      </div>
    </div>
  );
};

export default RestTime;
