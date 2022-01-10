import "../src/styles/style.scss";
import "../src/styles/main.scss";
import '../src/styles/startpage.css'


import Router from 'next/router';
import NProgress from 'nprogress';

import {motion, AnimatePresence} from "framer-motion"

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  const variants = { 
    hidden: { opactiy: 0 },
    visible:{ opacity: 1 },
    exit:{
      backgroundColor: "white", 
      opacity: 0
    }
  }
  return (
  <AnimatePresence>
    <motion.div key={router.route} initial="hidden" animate="visible" exit="exit" variants={variants}>
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )}

export default MyApp

