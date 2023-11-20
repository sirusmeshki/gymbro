// "use client";

// import supabase from "@/utils/supabase";
// import { useEffect, useState } from "react";

// const useMoves = () => {
//   const [moves, setMoves] = useState<any>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchMoves = async () => {
//       const { data, error } = await supabase.from("moves").select("*");
//       setMoves(data);
//       setIsLoading(false);

//       supabase
//         .channel("custom-all-channel")
//         .on(
//           "postgres_changes",
//           { event: "*", schema: "public", table: "moves" },
//           (payload) => {
//             console.log("Change received!", payload);
//           }
//         )
//         .subscribe();
//     };
//     fetchMoves();
//   }, []);

//   return [moves, isLoading];
// };

// export default useMoves;

import supabase from "@/utils/supabase";

const useMoves = async () => {
  const { data, error } = await supabase.from("moves").select("*");

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

  return data;
};

export default useMoves;
