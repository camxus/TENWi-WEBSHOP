import Nav from "./Nav.tsx";
import header from "../styles/header.module.css";
import Image from "next/image";
import CART from "./cart/CART";
import { forwardRef } from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <div>
      <Nav {...props}></Nav>

      <Link href="/">
        <div className={header.header_image}>
          <Image
            src={require("../../public/assets/gif/tenwi.gif")}
            objectFit="cover"
          ></Image>
        </div>
        {/* <CartIcon/> */}
      </Link>

      <CART></CART>
    </div>
  );
};

export default Header;
