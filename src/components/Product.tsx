import Link from "next/link";
import styles from "../../src/styles/cards.module.css";
import Image from "next/image";
import { getFloatVal } from "../functions.js";

const Product = ({ product }: any) => {
  if (!product || product.__typename === "GroupProduct") {
    return null;
  }

  const isInStock = product.stockStatus === "IN_STOCK";
  const currency = isInStock && product.price?.slice(-1) || "";
  const price = isInStock && product.price ? getFloatVal(product.price) : "SOLD OUT";

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.slug}`}>
        <div className={styles.imagewrapper}>
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
            <h1 className={styles["card-header"]}>
              {product?.name || ""}
            </h1>
            <h1 className={styles.subtitle}>
              {currency}
              {price || "-"}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
