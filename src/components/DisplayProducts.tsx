import { cartAtom } from "@/utils/atoms";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export type ObjProps = {
  id: number;
  pImg: string;
  pName: string;
  pDes: string;
  isAdded: number;
  pPrice: number;
  pAlt: string;
  pTotal: number;
};
export type ObjType = {
  product: ObjProps;
};

const DisplayProducts = ({ product }: ObjType) => {
  // const [cartCount, setCartCount] = useAtom(countAtom);

  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);
  // const [isClicked, setClicked] = useAtom(clickAtom);

  // const addToCartBtn = (key: number) => {
  //   setCartCount(cartCount + 1);
  //   setCartItem((prevCartItems: any) => {
  //     const existingItem = prevCartItems.find((item: any) => item.id === key);

  //     if (existingItem) {
  //       // Update the count of the existing item
  //       return prevCartItems.map((item: any) =>
  //         item.id === key ? { ...item, isAdded: item.isAdded + 1 } : item
  //       );
  //     } else {
  //       // Add the new item to the cart
  //       return [...prevCartItems, { ...product, isAdded: 1 }];
  //     }
  //   });
  // };

  const addToCartBtn = (key: number) => {
    // setClicked(true);
    setCartItem((previousCart: ObjProps[]) => {
      const existingItem = previousCart.find(
        (item: ObjProps) => item.id === key
      );

      if (existingItem)
        return previousCart.map((item: ObjProps) =>
          item.id === key
            ? {
                ...item,
                isAdded: item.isAdded + 1,
                pTotal: (item.isAdded + 1) * item.pPrice,
              }
            : item
        );
      else {
        return [
          ...previousCart,
          { ...product, isAdded: 1, pTotal: product.pPrice },
        ];
      }
    });
  };

  return (
    <>
      <Card className="w-50 lg:w-80 rounded-none lg:mx-12 mb-5">
        <CardBody className="space-y-2 lg:w-80">
          <Link
            href={`/${product.pName.split(" ").join("-")}`}
            target="__blank"
            key={product.id}>
            <Image
              src={product.pImg}
              alt={product.pAlt}
              className="w-40 lg:w-80"
              width={300}
              height={400}
            />
            <div className="text-xl md:text-2xl">{product.pName}</div>
            <div className="">₹ {product.pPrice}</div>
          </Link>

          <Button color="success" onClick={() => addToCartBtn(product.id)}>
            Add To Cart
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default DisplayProducts;
