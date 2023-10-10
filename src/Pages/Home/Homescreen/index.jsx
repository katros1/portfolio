import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortifolio from "../Portifolio";
import MySkills from "../Skills";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortifolio />
            <ContactMe />
            <Footer />
        </>
    )
}