import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "../src/queries/get-categories";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Link from 'next/link'
// import styles from '../src/styles/startpage.module.css'
// import '../src/styles/startpage.scss'
import intro from '../src/styles/intro.module.css';
import Image from 'next/image'

import {useRef, useEffect} from 'react'

export default function Categories ( {productCategories, categories, tags} ) {

    const main = useRef(null)
    const elems = useRef(null)

	const before = useRef(null)
	const after = useRef(null)

    const getTop = (el) => {
	let viewportOffset = el.getBoundingClientRect();
	let elemTop = viewportOffset.top;
	before.style.top = "-" + elemTop + "px";
	after.style.top = "-" + elemTop + "px";
    }

    const lightToDark = () => {
	// const tl = new TimelineMax();
	const groups = ["#one", "#two", "#three"];
	// tl
	// 	.set(".before", {opacity:0})
	// 	.set(groups, {opacity:0,y:60})
	// 	.to(main, 0.5, {opacity:1})
	// 	.staggerTo(groups, 0.5, {opacity:1,ease:Power3.easeOut}, 0.2)
	// 	.staggerTo(groups, 1, {y:0,ease:Power3.easeOut}, 0.2, '-=1')
	// 	.to(".before", 2, {opacity:1})
	// 	.to(".after", 2, {opacity:0}, '-=1')
	// 	.to(".notification", 0.25, {color:"#1b1e29"}, '-=3')
	// 	.to(".notification", 1.75, {color:"white"}, '-=2.75')
	// 	.to(".one .notification", 1, {backgroundColor:"rgba(17,19,26,0.6)"}, '-=3')
	// 	.to(".one .notification", 1, {backgroundColor:"rgba(0,0,0,0.5)"}, '-=2.5')
	// 	.to(".two .notification", 1, {backgroundColor:"rgba(17,19,26,0.5)"}, '-=3')
	// 	.to(".two .notification", 1, {backgroundColor:"rgba(0,0,0,0.4)"}, '-=2.5')
	// 	.to(".three .notification", 1, {backgroundColor:"rgba(17,19,26,0.4)"}, '-=3')
	// 	.to(".three .notification", 1, {backgroundColor:"rgba(0,0,0,0.3)"}, '-=2.5')
	// ;
    }

    // imagesLoaded(main, {background:true}, () => {
        useEffect(() => {
            console.log(elems)
            elems==!null && elems==!undefined ? 
            elems.map(el => {
                getTop(el);
                window.addEventListener("resize", function() {
                    setTimeout(() => {
                        getTop(el);
                    }, 250);
                });  
            }): "" ; 
            elems ? 
            window.requestAnimationFrame(lightToDark) : ""
        }, [elems])
    // });
	return (
    //     <main ref={main} id="main">
    //     <div ref={before} className={`${styles["before"]}`}></div>
    //     <div  ref={after} className={`${styles["after"]}`}></div>
    //     <ul id="one">
    //       <li className={`${styles["one"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div  ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //             <header>
    //               <h2>TENWi</h2>
    //               <span className={`${styles["timestamp"]}`}>Now</span>
    //             </header>
    //             <div className={`${styles["content"]}`}>
    //               <span className={`${styles["sender"]}`}>TENWi</span>
    //               <span className={`${styles["message"]}`}>WEBSHOP</span>
    //               <span className={`${styles["more"]}`}>2 more messages from TENWi</span>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["two"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["three"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //     <ul id="two">
    //       <li className={`${styles["one"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //             <header>
    //               <h2>Calendar</h2>
    //               <span className={`${styles["timestamp"]}`}>1h ago</span>
    //             </header>
    //             <div className={`${styles["content"]}`}>
    //               <span className={`${styles["event"]}`}>WWDC 2018</span>
    //               <span className={`${styles["date"]}`}>June 4, 2018 at 10:00 AM</span>
    //               <span className={`${styles["more"]}`}>2 more invitations</span>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["two"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["three"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //     <ul id="three">
    //       <li className={`${styles["one"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //             <header>
    //               <h2>Twitter</h2>
    //               <span className={`${styles["timestamp"]}`}>2h ago</span>
    //             </header>
    //             <div className={`${styles["content"]}`}>
    //               <span className={`${styles["user"]}`}>Gabrielle Wee</span>
    //               <span className={`${styles["message"]}`}>Dark Mode for iOS would be so cool!</span>
    //               <span className={`${styles["more"]}`}>2 more notifications</span>
    //             </div>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["two"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //       <li className={`${styles["three"]}`}>
    //         <div className={`${styles["container"]}`}>
    //           <div ref={elems} className={`${styles["notification"]}`}>
    //             <span  ref={before} className={`${styles["before"]}`}></span>
    //             <span  ref={after}  ref={after} className={`${styles["after"]}`}></span>
    //           </div>
    //         </div>
    //       </li>
    //     </ul>
    //   </main>

    <main id="main">
  <div class="before"></div>
  <div class="after"></div>
  <ul id="one">
    <li class="one">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
          <header>
            <h2>TENWi</h2>
            <span class="timestamp">Now</span>
          </header>
          <div class="content">
            <span class="sender">TENWi</span>
            <span class="message">WEBSHOP</span>
            <span class="more">2 more messages from TENWi</span>
          </div>
        </div>
      </div>
    </li>
    <li class="two">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
    <li class="three">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
  </ul>
  <ul id="two">
    <li class="one">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
          <header>
            <h2>Calendar</h2>
            <span class="timestamp">1h ago</span>
          </header>
          <div class="content">
            <span class="event">WWDC 2018</span>
            <span class="date">June 4, 2018 at 10:00 AM</span>
            <span class="more">2 more invitations</span>
          </div>
        </div>
      </div>
    </li>
    <li class="two">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
    <li class="three">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
  </ul>
  <ul id="three">
    <li class="one">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
          <header>
            <h2>Twitter</h2>
            <span class="timestamp">2h ago</span>
          </header>
          <div class="content">
            <span class="user">Gabrielle Wee</span>
            <span class="message">Dark Mode for iOS would be so cool!</span>
            <span class="more">2 more notifications</span>
          </div>
        </div>
      </div>
    </li>
    <li class="two">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
    <li class="three">
      <div class="container">
        <div class="notification">
          <span class="before"></span>
          <span class="after"></span>
        </div>
      </div>
    </li>
  </ul>
</main>

      
	)
}