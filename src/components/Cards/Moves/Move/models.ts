export type MoveProps = {
  id?: number;
  name: string;
  effective_muscle: string;
  image_url?: string | null;
  isOptionsOpen?: boolean;
  setIsOptionsOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export type MovesProps = {
  moves: MoveProps[];
};
