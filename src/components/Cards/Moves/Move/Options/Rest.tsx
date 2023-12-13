import { RestProps } from './models'

import NumberInput from '@/components/Input/NumberInput'

const Rest: React.FC<RestProps> = ({ sec, min, setSec, setMin }) => {
    return (
        <div className="border-top flex h-20 w-full shrink-0 items-center justify-between">
            <p className="pr-2 text-sm font-semibold text-neutral-600">
                استراحت :
            </p>
            <div className="flex h-full items-center justify-center">
                <NumberInput
                    title="ثانیه"
                    value={sec ? sec : ''}
                    setValue={(e) => setSec?.(e.target.value)}
                    placeholder="0"
                />
                <span className="border-right flex h-full w-6 items-center justify-center">
                    :
                </span>
                <NumberInput
                    title="دقیقه"
                    value={min ? min : ''}
                    setValue={(e) => setMin?.(e.target.value)}
                    placeholder="0"
                />
            </div>
        </div>
    )
}

export default Rest
