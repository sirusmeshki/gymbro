"use client";

import React, { useState } from "react";

const Page = () => {
  const [number, setNumber] = useState("");

  return (
    <div>
      <input
        type="number"
        className="text-xl border"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default Page;
