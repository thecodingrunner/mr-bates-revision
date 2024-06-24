import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import HomeStats from "@/components/HomeStats";
import HomeVideos from "@/components/HomeVideos";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HomeStats />
      <HowItWorks />
      <HomeVideos />
      <Banner />
      <Testimonials />
    </main>
  );
}
