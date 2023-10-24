"use client";

import useMoves from "@/hooks/useMoves";
import { useSearchParams } from "next/navigation";

import MovesList from "./MovesList";
import { useState, useEffect } from "react";

const Moves = () => {
  const [moves, isLoading] = useMoves();
  const [filteredMoves, setFilteredMoves] = useState([]);
  const search = useSearchParams();

  let searchedName = search.get("move");
  let selectedMuscle = search.get("muscle");

  //result moves for selected muscle
  const muscleFilter = moves.filter(
    (move: { effective_muscle: string | null }) =>
      move.effective_muscle === selectedMuscle
  );

  //result moves for searched name
  const searchFilter = moves.filter((move: { name: (string | null)[] }) =>
    move.name.includes(searchedName)
  );

  //result moves for when muscle is selected and user search
  const searchFilterByMuscle = muscleFilter.filter(
    (move: { name: (string | null)[] }) => move.name.includes(searchedName)
  );

  useEffect(() => {
    //when muscle selected
    if (muscleFilter) {
      setFilteredMoves(muscleFilter);
    }

    //when user searched for name
    if (searchedName) {
      setFilteredMoves(searchFilter);
    }

    //when user wants search in selected muscle
    if (selectedMuscle && searchedName) {
      setFilteredMoves(searchFilterByMuscle);
    }
  }, [searchedName, selectedMuscle]);

  return (
    <>
      {/* when there is no search input and filter */}
      {!searchedName && !selectedMuscle ? (
        <MovesList moves={moves} />
      ) : (
        // when user used a filter or search
        <MovesList moves={filteredMoves} />
      )}
    </>
  );
};

export default Moves;
