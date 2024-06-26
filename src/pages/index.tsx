import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Products from "@/components/Products";
import { memo } from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
    </>
  );
};

export default memo(index);
