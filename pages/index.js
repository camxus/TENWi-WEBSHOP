import LayoutStart from "../src/components/LayoutStart";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "../src/queries/get-categories";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Link from 'next/link'
// import styles from '../src/styles/startpage.module.css'
// import '../src/styles/startpage.scss'
import intro from '../src/styles/intro.module.css';
import Image from 'next/image'
import NewsletterSubmit from  "../src/components/NewsletterSubmit.js";

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


    const NotificationsStruct = [
      // {
      // header : "TENWi",
      // timestamp : "Now",
      // sender: "TENWi",
      // message: "WEBSHOP",
      // link: "/shop"
      // },
      {
      header : "TENWi",
      timestamp : "Now",
      sender: "TENWi",
      message: "GALLERY",
      link: "/gallery"
      },
    ]

	return (
    <LayoutStart>
    <div>
    <div class="before">
    <Image
    src={require("../public/assets/gif/IMG_3319.GIF")}
    layout="fill"
    objectFit="cover"
    />
      <div class="after"></div>
  </div>
    <div class="startpage-wrapper">
    <main id="main">
  {/* <div class="before">
    <Image
    src={require("../public/assets/gif/IMG_3319.GIF")}
    layout="fill"
    objectFit="cover"
    />
  </div> */}
  <div class="notification-wrapper">
    {NotificationsStruct && NotificationsStruct.map( item =>
        <ul id="one" class="notification-button">
        <li class="one">
          <div class="container">
          <a href={item.link}>
            <div class="notification">
              <span class="before"></span>
              <span class="after"></span>
              <header>
                <h2>{item.header}</h2>
                <span class="timestamp">{item.timestamp}</span>
              </header>
              <div class="content">
                <span class="sender">{item.sender}</span>
                <span class="message">{item.message}</span>
                <span class="more">2 more messages from {item.sender}</span>
              </div>
            </div>
            </a>
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
    )}
  </div>
		  	<NewsletterSubmit></NewsletterSubmit>
</main>		
      </div>
      </div>
      </LayoutStart>


      
	)
}