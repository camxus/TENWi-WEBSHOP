import Link from "next/link";
import React, { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import cart from "../../../src/styles/cart.module.css";

const Sidebar = () => {
  let navBtn = useRef(null);
  let cartOverlay = useRef(null);
  let cartContainer = useRef(null);

  var statement = false;
  const openNav = () => {
    if (cartContainer.style.right !== "0%" && statement === true) {
      cartContainer.style.right = "0%";
      cartOverlay.style.opacity = "70%";
      statement = false;
    } else {
      cartContainer.style.right = "-24.4%";
      cartOverlay.style.opacity = "0%";
      statement = true;
    }
  };

  const [isMenuVisible, setMenuVisibility] = useState(false);

  return (
    <div>
      <div ref={cartContainer} className={cart.nav_container}>
        <div
          ref={(el) => {
            navBtn = el;
          }}
          className={cart.nav_btn}
        >
          <div className={cart.dot}></div>
        </div>
        <div className={cart.navbody}>
          {/* <CartItemsContainer/> */}
          <div className={cart.cartText}>
            <p dir="ltr">REFUNDS</p>
            <p dir="ltr">
              Unfortunately at this moment we cannot offer any refunds. So
              please choose carefully. In order to help you decide, we are happy
              to assist by answering all your questions. Please send your
              questions to{" "}
              <a href="mailto:tenwioffice@gmail.com">tenwioffice@gmail.com</a>{" "}
              or Instagram @tenwiofficial
            </p>
            <br />
            <p dir="ltr">EU SHIPPING</p>
            <ul>
              <li dir="ltr">
                <p dir="ltr">15€</p>
              </li>
            </ul>
            <ul>
              <li dir="ltr">
                <p dir="ltr">
                  Each order will be delivered within 5 to 12 working days after
                  the client receives the shipping confirmation email.
                </p>
              </li>
            </ul>
            <p dir="ltr">INTERNATIONAL SHIPPING</p>
            <ul>
              <li dir="ltr">
                <p dir="ltr">28€</p>
              </li>
              <li dir="ltr">
                <p dir="ltr">
                  Our shipping system will charge you with 15€ shipping but if
                  you are located outside of Europe, you will be charged via
                  email with an extra 13€ fee for international order.
                </p>
              </li>
            </ul>
            <ul>
              <li dir="ltr">
                <p dir="ltr">
                  If you are located outside the EU, please note that additional
                  customs fees might apply.
                </p>
              </li>
              <li dir="ltr">
                <br />
              </li>
              <li dir="ltr">
                <p dir="ltr">
                  All orders from America, Asia are subject to 1-2 week delivery
                  (depending on location). An example of INTERNATIONAL SHIPPING
                  would be a US based customer ordering from our EU-based
                  webshop.
                </p>
              </li>
            </ul>
            <br />

            <p dir="ltr">CHRISTMAS EXPRESS SHIPPING</p>
            <ul>
              <li dir="ltr">
                <p dir="ltr">
                  Due to technical errors we can not provide express shipping at
                  the moment.
                </p>
              </li>
            </ul>
            <p dir="ltr">SOLD OUT (PRE-ORDER REQUEST)</p>
            <p dir="ltr">
              - In case your product is sold out: ask for PRE-ORDER by sending
              an email to tenwioffice@gmail.com. Depending on the situation we
              are able to make another sample for you - so feel free to send a
              request.
            </p>
            <p dir="ltr">
              <br />
              CARE
            </p>
            <p dir="ltr">
              Wash your garments at 30 - 40 degrees depending on fabric;
              easy-care washing programme. Do not tumble dry.
            </p>
            <p dir="ltr">
              <br />
              COMMISSIONS &amp; SPECIAL CUSTOM ORDERS
            </p>
            <p dir="ltr">
              For custom requests and commissions please send email to:{" "}
              <a href="mailto:tenwioffice@gmail.com">tenwioffice@gmail.com</a>
            </p>
            <p dir="ltr">
              Follow us on &amp; stay tuned for new projects on Instagram:
              @tenwiofficial
            </p>
            <br />
          </div>
        </div>
      </div>
      <div
        onClick={openNav}
        ref={(el) => {
          cartOverlay = el;
        }}
        className={cart.overlay}
      ></div>
    </div>
  );
};
export default Sidebar;
