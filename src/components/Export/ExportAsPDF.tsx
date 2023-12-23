'use client'

import Image from 'next/image'

import Button from '../Button'

import PDF from '@/app/_pdf/page'

import { useIsClient } from 'usehooks-ts'
import { PDFDownloadLink } from '@react-pdf/renderer'

const ExportAsPDF = () => {
    const isClient = useIsClient()

    return (
        <>
            {isClient && (
                <PDFDownloadLink document={<PDF />} fileName="gymbro.pdf">
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
                </PDFDownloadLink>
            )}
        </>
    )
}

export default ExportAsPDF
