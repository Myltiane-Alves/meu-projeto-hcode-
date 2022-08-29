import About from "../../components/About";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/Navbar/MobileMenu";
import Rating from "../../components/Rating";


export function Home() {
  return (
    <>
      <Rating />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
