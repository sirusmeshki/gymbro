import { fetchMoves } from "@/app/lib/data";
import MovesList from "./MovesList";

const Moves = async ({
  moveQuery,
  muscleQuery,
}: {
  moveQuery: string;
  muscleQuery: string;
}) => {
  const moves = await fetchMoves(moveQuery, muscleQuery);

  return <MovesList moves={moves} />;
};

export default Moves;
