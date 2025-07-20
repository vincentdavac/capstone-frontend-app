import About from "../../Components/layout/About";
import FAQs from "../../Components/layout/FAQs";
import Footer from "../../Components/layout/Footer";
import Prototype from "../../Components/layout/Prototype";
import Slider from "../../Components/layout/Slider";
import Team from "../../Components/layout/Team";
import Testimonials from "../../Components/layout/Testimonial";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Prototype />
      <Team />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
}
