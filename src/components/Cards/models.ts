import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type MoveProps = {
    id?: number
    name: string
    effective_muscle: string
    image_url?: string | null
    onOpenOptions?: () => void
    onCloseOptions?: () => void
}

export type InfoProps = {
    name: string
    effective_muscle: string
    image_url: string | null | undefined
}

export type MovesProps = {
    moves: MoveProps[] | null
}

export type CustomProps = {
    set: number
    reps: number
}

export type SingleProps = {
    sets: string
    reps: string
}

// Custom
// [{ set: 1, reps: 8 },
// { set: 2, reps: 0 },
// { set: 3, reps: 0 },
// { set: 4, reps: 0 },
// { set: 5, reps: 0 },]

// Single
// { set: 1, reps: 8 }

export type RestProps = {
    min: string
    sec: string
    setMin?: React.Dispatch<React.SetStateAction<string>> | undefined
    setSec?: React.Dispatch<React.SetStateAction<string>> | undefined
}

export type SARsProps = {
    custom: CustomProps[] | null | undefined
    single: SingleProps | null | undefined
}

export type SetsAndRepsProps = {
    SARs: SARsProps
    setSARs: React.Dispatch<React.SetStateAction<any>> | undefined
}

export type WorkoutProps = {
    name: string
    effective_muscle?: string
    image_url?: string | null | undefined | StaticImport
    rest: RestProps
    SARs: SARsProps
    superset?: WorkoutProps[] | null
    setIsOptionsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined
    isEditing?: boolean
}

export type PlanProps = {
    title: string
    workouts: WorkoutProps[]
}
