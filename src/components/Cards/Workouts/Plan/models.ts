import { SARsProps } from '@/components/Cards/models'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type MoveImageProps = {
    className?: string
    image_url: string | null | undefined | StaticImport
    pdf?: boolean
    height: string
}

export type NameProps = {
    className?: string
    style: object
    name: string
    pdf?: boolean
}

export type RestProps = {
    rest: { min: string; sec: string }
    pdf?: boolean
}

export type SetsAndRepsProps = {
    SARs: SARsProps
    pdf?: boolean
}

export type WorkoutProps = {
    index: number
    name: string
    rest: { min: string; sec: string }
    SARs: SARsProps
    image_url: string | null | undefined | StaticImport
    pdf?: boolean
    design?: string
}
