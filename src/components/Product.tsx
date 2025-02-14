import Link from "next/link";
import styles from "../../src/styles/cards.module.css";
import Image from "next/image";
import { getFloatVal } from "../functions.js";

const Product = ({ product }: any) => {
  if (!product || product.__typename === "GroupProduct") {
    return null;
  }

  const isInStock = product.stockStatus === "IN_STOCK";
  const currency = (isInStock && product.price?.slice(-1)) || "";

  return (
    <div className={styles.card}>
      <Link href={`/shop/product/${product.slug}`}>
        <div className={"relative pt-[133.34%] md:pt-[99vh]"}>
          <Image
            src={product?.image?.sourceUrl ?? ""}
            alt="Product image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className={styles["card-main"]}>
          <div className={styles["card-header-wrapper"]}>
            <h1 className={styles["card-header"]}>{product?.name || ""}</h1>
            <h1 className={`${styles.subtitle}`} style={{ display: "flex" }}>
              <div className="flex flex-row gap-2">
                <div className="flex">
                  {currency}
                  <span className={`${!!product.salePrice && "line-through"}`}>
                    {isInStock && product.regularPrice
                      ? getFloatVal(product.regularPrice)
                      : "SOLD OUT"}
                  </span>
                </div>
                {isInStock && product.salePrice && (
                  <div className={`flex text-gray-600 ${styles.salePrice}`}>
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
