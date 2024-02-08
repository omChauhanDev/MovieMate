import heroimg from "../../assets/home/hero.svg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="flex-1 w-full flex md:bg-herobg bg-cover bg-top">
      <motion.div
        className="flex-1 mx-auto max-w-[70%] flex justify-between gap-4 items-center"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <div className="flex-[4] font-Outfit mx-auto flex justify-center flex-col gap-3">
          <div>
            <h1 className="font-extrabold text-7xl">Movie Mate</h1>
            <div className="flex gap-1 text-3xl font-semibold">
              <h3 className="text-black/80">For all the</h3>
              <TypeAnimation
                sequence={[
                  "Film Enthusiasts",
                  2000,
                  "Cinephilles",
                  2000,
                  "Film Aficionados",
                  2000,
                  "Movie Mavens",
                  2000,
                ]}
                wrapper="span"
                style={{ color: "#2d83b9" }}
                speed={20}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="max-w-[56ch] font-[500] text-black/80">
            Welcome to Movie Mate! Join a vibrant community of movie lovers,
            connect with fellow cinephiles, plan cinema outings, and create
            unforgettable film memories together. Whether you&apos;re looking
            for new friends or craving shared movie experiences, Movie Mate is
            your ultimate cinematic companion. Let the magic of movies unite
            us—join now and enhance your film journey!
          </p>
          <motion.div
            whileTap={{ scale: 0.99, rotate: "-0.5deg" }}
            whileHover={{ scale: 1.01 }}
          >
            <Link to="/signup">
              <Button className="max-w-fit mt-4 bg-steelBlue shadow-lg text-lg py-[1.3em] px-4 hover:bg-steelBlue active:bg-royalBlue">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="flex-[4] hidden md:inline">
          <img
            src={heroimg}
            className="w-full scale-110"
            alt="friends-enjoying-movie"
          />
        </div>
      </motion.div>
    </div>
  );
};
