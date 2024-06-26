import Link from "next/link";

const ToggleMenu = () => {
  return (
    <>
      <div className="space-y-4 text-xl px-3 absolute z-10 bg-gray-300 w-full py-5">
        <Link href="/">
          <div className="">Home</div>
        </Link>
        <div className="">About</div>
        <div className="">Catalogue</div>
        <div className="">Contact Us</div>
      </div>
    </>
  );
};

export default ToggleMenu;
