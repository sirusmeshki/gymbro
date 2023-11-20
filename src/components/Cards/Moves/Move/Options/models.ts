import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type MoveProps = {
  id?: number;
  name: string;
  effective_muscle: string;
  image_url?: string | null;
  isOptionsOpen?: boolean;
  setIsOptionsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export type InfoProps = {
  name: string;
  effective_muscle: string;
  image_url: string | null | undefined;
};

export type MovesProps = {
  moves: MoveProps[] | null;
};

export type CustomProps = {
  set: number;
  reps: number;
};

export type SingleProps = {
  sets: number;
  reps: number;
};

// Custom
// [{ set: 1, reps: 8 },
// { set: 2, reps: 0 },
// { set: 3, reps: 0 },
// { set: 4, reps: 0 },
// { set: 5, reps: 0 },]

// Single
// { set: 1, reps: 8 }

export type RestProps = {
  min: number;
  sec: number;
  setMin?: React.Dispatch<React.SetStateAction<number>> | undefined;
  setSec?: React.Dispatch<React.SetStateAction<number>> | undefined;
};

export type SARsProps = {
  custom: CustomProps[] | null | undefined;
  single: SingleProps | null | undefined;
};

export type SetsAndRepsProps = {
  SARs: SARsProps;
  setSARs: React.Dispatch<React.SetStateAction<any>> | undefined;
};

export type WorkoutProps = {
  name: string;
  effective_muscle: string;
  image_url: string | null | undefined | StaticImport;
  rest: RestProps;
  SARs: SARsProps;
  superset?: string | null;
  setIsOptionsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};
