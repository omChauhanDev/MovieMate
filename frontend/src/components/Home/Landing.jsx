import { Features } from "./Features";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { Faq } from "./FAQ";

export const Home = () => {
  return (
    <div className="flex-1 flex flex-col relative">
      <Navigation />
      <Hero />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
};
