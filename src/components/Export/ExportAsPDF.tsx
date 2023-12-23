import Image from 'next/image'

import Button from '../Button'

import { usePDF } from '@react-pdf/renderer'
import PDF from '@/app/_pdf/page'

const ExportAsPDF = () => {
    const [instance, updateInstance] = usePDF({ document: <PDF /> })
    if (instance.loading) return <div>Loading ...</div>
    if (instance.error) return <div>Something went wrong: {instance.error}</div>

    return (
        <a href={instance.url} download="test.pdf">
            <Button
                className="border-bottom max-h-24 min-h-[96px] w-full"
                cta="اکسپورت PDF"
                placeholder={
                    <Image
                        src="/icon/arrow-left.svg"
                        alt="arrow left"
                        width={24}
                        height={24}
                    />
                }
                alt="submit workouts button"
            />
        </a>
    )
}

export default ExportAsPDF