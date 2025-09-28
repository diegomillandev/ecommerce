import Image from "next/image";
import { ProductCard } from "./product-card";

export const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-6">
      {title && <h2 className="text-2xl font-bold mb-5">{title}</h2>}

      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitData.map((product: any) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <div className="">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};
