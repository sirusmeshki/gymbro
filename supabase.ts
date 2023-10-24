export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      moves: {
        Row: {
          effective_muscle: string | null;
          id: number;
          image_url: string | null;
          name: string | null;
        };
        Insert: {
          effective_muscle?: string | null;
          id?: number;
          image_url?: string | null;
          name?: string | null;
        };
        Update: {
          effective_muscle?: string | null;
          id?: number;
          image_url?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      "users-workouts": {
        Row: {
          created_at: string | null;
          id: number;
          workouts: Json | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          workouts?: Json | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          workouts?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
