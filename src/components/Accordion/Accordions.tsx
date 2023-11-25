"use client";

import { useEffect, useState } from "react";

import Accordion from "@/components/Accordion/Accordion";
import Option from "@/components/Accordion/Option";

import { accordions } from "./models";

const Accordions = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient &&
        accordions.map((accordion, index) => (
          <Accordion title={accordion.name} key={index}>
            {accordion.options.map((option) => (
              <Option
                key={option.query}
                query={option.query}
                title={option.title}
                isInput={option.type}
                inputType={option.inputType}
                placeholder={option.placeholder}
              />
            ))}
          </Accordion>
        ))}
    </>
  );
};

export default Accordions;
