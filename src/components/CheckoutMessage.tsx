import { SetStateAction } from "jotai";
import { IoBagCheckOutline } from "react-icons/io5";

type StateProps = {
  checkout: boolean;
  setCheckout: React.Dispatch<SetStateAction<boolean>>;
};

const CheckoutMessage = ({ checkout, setCheckout }: StateProps) => {
  return (
    <>
      <div
        className={`flex mx-8 absolute z-20 w-72 h-auto bg-gray-800 px-2 py-2 text-white poppins rounded-2xl appearfromleft overflow-x-hidden ${
          checkout ? "" : "hidden"
        }`}>
        <div className=" flex items-center gap-3">
          <IoBagCheckOutline color="green" fill="success" size={50} />

          <p className="text-lg font-normal"> Your Order is Placed </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutMessage;
