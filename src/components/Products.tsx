import DisplayProducts from "@/components/DisplayProducts";
import { productArray } from "./ProductArray";

const Products = () => {
  return (
    <>
      <div className="poppins text-4xl  font-normal text-center py-8 lg:py-12">
        Accessories
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {productArray.map((product) => {
          return (
            <>
              <DisplayProducts key={product.id} product={product} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
