import { cartAtom } from "@/utils/atoms";
import { useAtom } from "jotai";
import { ObjProps } from "./DisplayProducts";
import { useEffect, useState } from "react";

const Total = () => {
  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);
  const [total, setTotal] = useState(0);

  let totalValue = cartItem.reduce((acc, eachItem) => acc + eachItem.pTotal, 0);
  console.log(totalValue);

  let subTotal = (totalValue * 1.05).toFixed(2);

  useEffect(() => {
    setTotal(totalValue);
  }, [cartItem]);

  return (
    <>
      <div className="hidden lg:block">
        <div className="poppins px-5">
          <div className="text-3xl text-center py-5">Total Bill</div>
          <hr className="text-gray-300" />
          <div className="py-3 spy-5">
            <div className="flex justify-around items-center">
              <span className="text-2xl font-light">Total: </span>
              <span className="text-2xl">{total}</span>
            </div>
            <div className="flex justify-around items-center">
              <span className="text-2xl font-light">Added GST: </span>
              <span className="text-2xl">5%</span>
            </div>
            <hr className="text-gray-300" />
            <div className="flex justify-around items-center">
              <span className="text-2xl font-light">Subtotal: </span>
              <span className="text-2xl">{subTotal}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:hidden">
        <div className="fixed z-10 h-16 w-full bg-orange-400 bottom-0   poppins flex justify-around items-center">
          <div className="">
            <div className="text-xl font-normal">Total: </div>
            <div className="">{total}</div>
          </div>
          <div className="">5% GST Added</div>
          <div className="">
            <div className="">Subtotal: </div>
            <div className="">{subTotal}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
