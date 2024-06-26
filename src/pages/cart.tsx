import CartItem from "@/components/CartItem";
import { ObjProps } from "@/components/DisplayProducts";
import Navbar from "@/components/Navbar";
import Total from "@/components/Total";
import { cartAtom } from "@/utils/atoms";
import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";

const Cart = () => {
  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);
  // const [isClicked, setClicked] = useAtom(clickAtom);

  //  useEffect(()=>{
  //   const updatedCart =cartItem.map((eachItem)=>{
  //     eachItem.id===key? {...eachItem, pTotal}
  //   })
  //  },[isClicked])

  return (
    <>
      <Navbar />

      <div className="grid lg:grid-cols-3 bg-gray-100 min-h-screen">
        <div className="col-span-2 border-r-1 border-solid border-gray-300">
          {cartItem.map((eachItem) => {
            return <CartItem key={eachItem.id} eachItem={eachItem} />;
          })}
        </div>
        <div className="">
          <Total />
        </div>
      </div>
    </>
  );
};

export default Cart;
