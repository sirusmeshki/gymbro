export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Move = {
  id: number;
  name: string | null;
  effective_muscle: string | null;
  image_url: string | null;
};
