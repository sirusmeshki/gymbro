import supabase from "@/utils/supabase";

export async function fetchMoves(moveQuery: string, muscleQuery: string) {
  try {
    let movesQuery = supabase.from("moves").select();

    if (moveQuery) {
      movesQuery = movesQuery.textSearch("name", `'${moveQuery}'`);
    }
    // return moves by search input

    if (muscleQuery) {
      movesQuery = movesQuery.eq("effective_muscle", `${muscleQuery}`);
    }
    // return moves by filter selectbox

    const { data } = await movesQuery;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch moves data.");
  }
}

export async function fetchMoveByName(name: string) {
  try {
    const { data } = await supabase
      .from("moves")
      .select()
      .eq("name", `'${name}'`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch moves data.");
  }
}
