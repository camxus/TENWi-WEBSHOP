import Link from "next/link";
import CartIcon from "./cart/CartIcon";
import React, { useState, useRef, useContext, useEffect } from "react";
import Image from "next/image";
import navbar from "../../src/styles/navbar.module.css";
import { NavContext } from "./context/NavContext";

const Nav = () => {
  const { categories, tags } = useContext(NavContext);

  const [navOpen, setNavOpen] = useState(false);
  const navContainer = useRef<HTMLDivElement>(null);
  const navOverlay = useRef<HTMLDivElement>(null);

  const openNavMobile = () => {
    setNavOpen((navOpen) => !navOpen);
  };

  useEffect(() => {
    if (navContainer.current && navOverlay.current) {
      if (navOpen) {
        navOverlay.current.style.opacity = "70%";
      } else {
        navOverlay.current.style.opacity = "0%";
      }
    }
  }, [navOpen]);

  return (
    <div>
      <div
        ref={navContainer}
        className={navbar.nav_container}
        data-open={navOpen}
      >
        <div
          className={navbar.mobile_nav_btn_wrapper}
          onClick={openNavMobile}
          data-open={navOpen}
        >
          <div className={navbar.mobile_nav_btn} />
        </div>
        <div className={navbar.navbody}>
          <div className={navbar.nav_items_container}>
            <div className={navbar.nav_items}>
              <Link href="/shop">
                <div className={navbar.nav_header}>
                  <Image
                    className={navbar.header_image}
                    src={require("../../public/assets/gif/tenwi.gif")}
                    objectFit="cover"
                    alt={""}
                  />
                </div>
              </Link>

              <ul className={navbar.nav_list}>
                <div className={navbar.nav_item_box}>
                  <Link href="/category/all" className={navbar.nav_link}>
                    <li className={`${navbar["nav_item"]} ${navbar["head"]}`}>
                      ALL
                    </li>
                    <div className={`${navbar.reveal} ${navbar.head}`}>
                      <li>ALL</li>
                    </div>
                  </Link>

                  {!!categories?.length && (
                    <>
                      <li className={`${navbar["nav_item"]} ${navbar["head"]}`}>
                        UNISEXWEAR
                      </li>
                      <div className={`${navbar.nav_item} ${navbar.sub_box}`}>
                        {categories.map((category) => (
                          <div>
                            <Link
                              href={`/category/${category.slug}`}
                              className={`${navbar.nav_link} ${navbar.sub}`}
                            >
                              <li className={navbar.nav_item}>
                                {category.name}
                              </li>
                              <div
                                className={`${navbar.reveal} ${navbar.head}`}
                              >
                                <li>{category.name}</li>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {!!tags?.length && (
                    <>
                      <li className={`${navbar["nav_item"]} ${navbar["head"]}`}>
                        FEATURES
                      </li>
                      <div className={`${navbar.nav_item} ${navbar.sub_box}`}>
                        {tags.map((tag) => (
                          <div>
                            <Link
                              href={`/feature/${tag.slug}`}
                              className={`${navbar.nav_link} ${navbar.sub}`}
                            >
                              <li className={navbar.nav_item}>{tag.name}</li>
                              <div
                                className={`${navbar.reveal} ${navbar.head}`}
                              >
                                <li>{tag.name}</li>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <Link href="/cart" className={navbar.nav_link}>
                  <li className={`${navbar["nav_item"]} ${navbar["head"]}`}>
                    CART
                  </li>
                  <div className={`${navbar.reveal} ${navbar.head}`}>
                    <li>CART</li>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div onClick={openNavMobile} className={navbar.overlay}></div>
    </div>
  );
};

export default Nav;
