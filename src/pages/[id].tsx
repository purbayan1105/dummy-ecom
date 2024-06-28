import { EachItemProps } from "@/components/CartItem";
import { ObjProps } from "@/components/DisplayProducts";
import Navbar from "@/components/Navbar";
import { productArray } from "@/components/ProductArray";
import { cartAtom } from "@/utils/atoms";
import { Card, CardBody } from "@nextui-org/react";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdDelete } from "react-icons/md";

type PrevCartProps = {
  prevCart: ObjProps[];
};

type ProductProps = {
  product: ObjProps;
};

const ProductDetail = () => {
  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);

  const router = useRouter();
  const { id } = router.query;
  const product = productArray.find((p) => p.pName === id);
  if (!product) {
    return <></>;
  }

  const addToCartHandler = (key: number) => {
    setCartItem((prevCart: ObjProps[]) => {
      const existingItem = prevCart.find((item) => item.id === key);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === key
            ? {
                ...item,
                isAdded: item.isAdded + 1,
                pTotal: (item.isAdded + 1) * item.pPrice,
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            isAdded: 1,
            pTotal: product?.pPrice,
          },
        ];
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center lg:items-start mx-5">
        <img src={product?.pImg} alt="" className="w-[400px] h-[600px]" />
        <div className="col-span-2 space-y-4 mt-16">
          <div className="text-2xl font-bold">{product?.pName}</div>
          <div className="text-lg mx-2 lg:pr-24">{product?.pDes}</div>
          <div className="text-lg font-bold">{product?.pPrice} INR</div>

          <div className="">
            <button
              className=" bg-green-400 text-white px-3 py-2 rounded-xl w-full lg:w-[60%]"
              onClick={() => addToCartHandler(product?.id)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
