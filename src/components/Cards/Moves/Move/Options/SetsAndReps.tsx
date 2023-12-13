import NumberInput from '@/components/Input/NumberInput'
import { SetsAndRepsProps } from './models'

const SetsAndReps: React.FC<SetsAndRepsProps> = ({ SARs, setSARs }) => {
    const sets = SARs?.single?.sets
    const reps = SARs?.single?.reps

    return (
        <div className="border-top flex h-20 w-full shrink-0 items-center justify-between">
            <p className="pr-2 text-sm font-semibold text-neutral-600">
                مقدار :
            </p>
            <div className="flex h-full items-center justify-center">
                <NumberInput
                    title="تکرار"
                    value={reps ? reps : ''}
                    setValue={(e) =>
                        setSARs?.({
                            ...SARs,
                            single: { sets, reps: e.target.value },
                        })
                    }
                    placeholder="0"
                />
                <span className="border-right flex h-full w-6 items-center justify-center">
                    x
                </span>
                <NumberInput
                    title="ست"
                    value={sets ? sets : ''}
                    setValue={(e) =>
                        setSARs?.({
                            ...SARs,
                            single: { sets: e.target.value, reps },
                        })
                    }
                    placeholder="0"
                />
            </div>
        </div>
    )
}

export default SetsAndReps
