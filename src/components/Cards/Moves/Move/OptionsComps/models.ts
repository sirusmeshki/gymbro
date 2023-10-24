export type InfoProps = {
  name: string;
  effective_muscle: string;
  image_url: string | null | undefined;
};

export type SARProps = {
  set: string;
  reps: string;
};

export type SARsProps = {
  SARs: SARProps[];
  setSARs: React.Dispatch<React.SetStateAction<SARProps[]>> | undefined;
};
