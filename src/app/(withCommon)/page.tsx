import HeroSection from "@/components/page/Home/HeroSection/HeroSection";
import HowItWorks from "@/components/page/Home/HowItWorks/HowItWorks";
import Specialty from "@/components/page/Home/Specialty/Specialty";
import TopDoctor from "@/components/page/Home/TopDoctor/TopDoctor";
import Container from "@/components/ui/Container";

const HomePage = () => {
  return (
    <Container>

      <HeroSection />

      <Specialty />

      <TopDoctor />

      <HowItWorks />
    </Container>
  );
};

export default HomePage;
