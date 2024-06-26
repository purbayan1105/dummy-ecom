import { Button, ButtonGroup, Card, CardBody } from "@nextui-org/react";
import { ObjProps } from "./DisplayProducts";
import { useAtom } from "jotai";
import { cartAtom } from "@/utils/atoms";
import { MdDelete } from "react-icons/md";

export type EachItemProps = {
  eachItem: ObjProps;
};

const CartItem = ({ eachItem }: EachItemProps) => {
  const [cartItem, setCartItem] = useAtom<ObjProps[]>(cartAtom);
  // const [isClicked, setClicked] = useAtom(clickAtom);

  const addHandler = (key: number) => {
    // setClicked(true);
    setCartItem(
      cartItem.map((eachItem: ObjProps) => {
        return eachItem.id === key
          ? {
              ...eachItem,
              isAdded: eachItem.isAdded + 1,
              pTotal: (eachItem.isAdded + 1) * eachItem.pPrice,
            }
          : eachItem;
      })
    );
  };

  const minusHandler = (key: number) => {
    // setClicked(true);
    setCartItem(
      cartItem.map((eachItem: ObjProps) => {
        return eachItem.id === key
          ? {
              ...eachItem,
              isAdded: eachItem.isAdded > 0 ? eachItem.isAdded - 1 : 0,
              pTotal: (eachItem.isAdded - 1) * eachItem.pPrice,
            }
          : eachItem;
      })
    );
  };

  const deleteHandler = (key: number) => {
    // setClicked(true);
    const newCart = cartItem.filter((eachItem) => eachItem.id !== key);
    setCartItem(newCart);
  };
  return (
    <>
      <Card className="lg:mx-0 rounded-none shadow-none sm:bg-transparent">
        <CardBody className="grid grid-cols-2  gap-3 poppins">
          <img src={eachItem.pImg} alt="" className="w-48" />
          <div className="space-y-8 mt-5">
            <div className="">{eachItem.pName}</div>
            <div className="">₹ {eachItem.pPrice}</div>
            <div className="flex justify-center items-center gap-5 bg-gray-300 w-fit text-xl px-3 rounded-md">
              <div className="cursor-pointer">
                {eachItem.isAdded === 1 ? (
                  <MdDelete onClick={() => deleteHandler(eachItem.id)} />
                ) : (
                  <div className="" onClick={() => minusHandler(eachItem.id)}>
                    -
                  </div>
                )}
              </div>
              <div className="">{eachItem.isAdded}</div>
              <button
                className="cursor-pointer"
                onClick={() => addHandler(eachItem.id)}>
                +
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CartItem;
