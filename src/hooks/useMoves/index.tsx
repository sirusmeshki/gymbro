"use client";

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const useMoves = () => {
  const [moves, setMoves] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("moves").select("*");
      setMoves(data);
      setIsLoading(false);

      supabase
        .channel("custom-all-channel")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "moves" },
          (payload) => {
            console.log("Change received!", payload);
          }
        )
        .subscribe();
    };
    fetchPosts();
  }, []);

  return [moves, isLoading];
};

export default useMoves;
