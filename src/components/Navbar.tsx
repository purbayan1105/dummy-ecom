import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import ToggleMenu from "./ToggleMenu";
import { useAtom } from "jotai";
import { cartAtom } from "@/utils/atoms";
import { ObjProps } from "./DisplayProducts";
import Link from "next/link";

const Navbar = () => {
  const [isToggled, setToggled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);

  let totalCart = cartItem.reduce((acc, eachItem) => acc + eachItem.isAdded, 0);

  useEffect(() => {
    setCartCount(totalCart);
  }, [cartItem]);
  return (
    <>
      <div className="grid lg:grid-cols-6 items-center lg:px-16 px-5 py-8 poppins grid-cols-5">
        <div className="lg:col-span-1 col-span-2">
          <Link href="/">
            <p className="text-2xl lg:text-3xl">Stereoverse</p>
          </Link>
        </div>
        <div className="col-span-4 lg:grid grid-flow-col items-center justify-center gap-16 text-xl hidden">
          <Link href="/">
            <div className="">Home</div>{" "}
          </Link>
          <div className="text-gray-300">About</div>
          <div className="text-gray-300">Catalogue</div>
          <div className="text-gray-300">Contact Us</div>
        </div>
        <div className="lg:col-span-1 col-span-2 flex lg:justify-center justify-end items-center gap-3">
          <Link href="/cart" target="__blank" className="">
            <AiOutlineShoppingCart size={30} className="relative" />
            <div className="absolute top-2 -z-10">
              <p className="bg-orange-400 rounded-full w-7 h-7 flex items-center justify-center">
                {cartCount}
              </p>
            </div>
          </Link>
          <div className="">
            <CgProfile size={30} />
          </div>
        </div>
        <div className="lg:hidden flex justify-end">
          {isToggled ? (
            <MdCancel size={30} onClick={() => setToggled(!isToggled)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setToggled(!isToggled)} />
          )}
        </div>
      </div>
      {isToggled && (
        <div className="">
          <ToggleMenu />
        </div>
      )}
    </>
  );
};

export default Navbar;
