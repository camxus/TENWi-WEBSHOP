import Link from "next/link";
import Image from "next/image";
import { getFloatVal } from "../functions.js";
import styles from "../../src/styles/cards.module.css";

const Product = ({ product }: any) => {
  if (!product || product.__typename === "GroupProduct") {
    return null;
  }

  const isInStock = product.stockStatus === "IN_STOCK";
  const currency = (isInStock && product.price?.slice(-1)) || "";

  return (
    <div className={`${styles.card} flex flex-col`}>
      {/* Make the link the hover group */}
      <Link href={`/shop/product/${product.slug}`} className="group block relative">
        {/* Image */}
        <div className="relative pt-[133.34%] md:pt-[99vh]">
          <Image
            src={product?.image?.sourceUrl ?? ""}
            alt="Product image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="transition-all duration-500 ease-in-out group-hover"
          />
        </div>

        {/* Info (changes bg on hover anywhere in group) */}
        <div className="block relative md:absolute border-t border-black md:border-t-0 h-max w-full bottom-0 p-2 bg-transparent group-hover:bg-black transition-all duration-500 ease-in-out">
          <div className={styles["card-header-wrapper"]}>
            <h1
              className={`${styles["card-header"]} transition-colors duration-500 group-hover:text-white`}
            >
              {product?.name || ""}
            </h1>

            <h1 className={`${styles.subtitle} flex`}>
              <div className="flex flex-row gap-2">
                <div className="flex items-center text-black group-hover:text-white transition-colors duration-500">
                  {currency}
                  <span className={`${!!product.salePrice && "line-through"}`}>
                    {isInStock && product.regularPrice
                      ? getFloatVal(product.regularPrice)
                      : "SOLD OUT"}
                  </span>
                </div>
                {isInStock && product.salePrice && (
                  <div className={`flex text-gray-600 group-hover:text-gray-300 ${styles.salePrice}`}>
                    {currency}
                    <span>{getFloatVal(product.salePrice)}</span>
                  </div>
                )}
              </div>
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
