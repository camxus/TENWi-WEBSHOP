import Nav from "../Nav";
import header from "../../styles/header.module.css";
import Image from "next/image";
import Sidebar from "../cart/Sidebar.jsx";
import { forwardRef } from "react";
import Link from "next/link";
import CartIcon from "../cart/CartIcon.js";
import { useRouter } from "next/router.js";

const Header = (props) => {
  const router = useRouter();

  // const isShop =
  //   props.referer?.includes("shop") || router.pathname.includes("shop");

  return (
    <div>
      <div className="fixed w-full flex justify-center items-center p-4 py-6 z-10">
        <Nav {...props} />
        <Link href="/" className={header.header_image}>
          <Image
            src={require("../../../public/assets/gif/tenwi.gif")}
            objectFit="cover"
          ></Image>
        </Link>

        <CartIcon />
      </div>
      {/* <Sidebar></Sidebar> */}
    </div>
  );
};

export default Header;
