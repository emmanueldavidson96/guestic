import React, { useState } from "react";
import { HiMiniUsers, HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

const GuestCounter = () => {
  const [count, setCount] = useState(1);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section className="w-full sm2:w-[45%] md:w-fit flex items-center gap-4">
      <section className="flex items-center gap-2 select-none">
        <HiMiniUsers />
        <p>Guests</p>
      </section>

      <section className="flex items-center gap-2">
        <HiMiniMinus
          className="cursor-pointer select-none"
          onClick={decrementCount}
        />
        <p>{count}</p>
        <HiMiniPlus
          className="cursor-pointer select-none"
          onClick={incrementCount}
        />
      </section>
    </section>
  );
};

export default GuestCounter;
