import NumberInput from "@/components/Input/NumberInput";
import { SetsAndRepsProps } from "./models";

const SetsAndReps: React.FC<SetsAndRepsProps> = ({ SARs, setSARs }) => {
  const sets = SARs?.single?.sets;
  const reps = SARs?.single?.reps;

  return (
    <div className="flex items-center justify-between w-full h-20 border-top shrink-0">
      <p className="pr-2 text-sm font-semibold text-neutral-600">مقدار :</p>
      <div className="flex items-center justify-center h-full">
        <NumberInput
          title="تکرار"
          value={reps ? reps : 0}
          setValue={(e) =>
            setSARs?.({ ...SARs, single: { sets, reps: e.target.value } })
          }
          placeholder="0"
        />
        <span className="flex items-center justify-center w-6 h-full border-right">
          x
        </span>
        <NumberInput
          title="ست"
          value={sets ? sets : 0}
          setValue={(e) =>
            setSARs?.({ ...SARs, single: { sets: e.target.value, reps } })
          }
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default SetsAndReps;
