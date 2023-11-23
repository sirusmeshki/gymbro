import { RestProps } from "./models";

import NumberInput from "@/components/Input/NumberInput";

const Rest: React.FC<RestProps> = ({ sec, min, setSec, setMin }) => {
  return (
    <div className="flex items-center justify-between w-full h-20 border-top shrink-0">
      <p className="pr-2 text-sm font-semibold text-neutral-600">استراحت :</p>
      <div className="flex items-center justify-center h-full">
        <NumberInput
          title="ثانیه"
          value={sec ? sec : ""}
          setValue={(e) => setSec?.(e.target.value)}
          placeholder="0"
        />
        <span className="flex items-center justify-center w-6 h-full border-right">
          :
        </span>
        <NumberInput
          title="دقیقه"
          value={min ? min : ""}
          setValue={(e) => setMin?.(e.target.value)}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default Rest;
