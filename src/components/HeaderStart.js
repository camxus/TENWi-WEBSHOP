import header from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Link className="flex items-center justify-center h-[100px]" href="/">
        <div className={header.header_image}>
          <Image
            src={require("../../public/assets/gif/tenwi.gif")}
            objectFit="cover"
          ></Image>
        </div>
      </Link>
    </div>
  );
};

export default Header;
