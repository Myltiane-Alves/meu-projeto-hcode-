import About from "../../components/About";
import BlogSection from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/Navbar/MobileMenu";
import Plan from "../../components/Plan";
import Rating from "../../components/Rating";
import Services from "../../components/Services";


export function Blog() {
  return (
    <>
      <Navbar />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  )
}
