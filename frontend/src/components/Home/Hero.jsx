import heroimg from "../../assets/home/hero.svg";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex-1 h-full min-h-[calc(100vh-64px)] w-full flex flex-col bg-herobg bg-cover lg:bg-top">
      <div className="flex-1 md:mx-auto px-8 md:px-12 xl:max-w-[80%] w-full text-center lg:text-left flex justify-between gap-4 items-center">
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={animationVariants}
          whileInView="visible"
          transition={{ transition: 2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="flex-[4] font-Outfit mx-auto flex justify-center items-center lg:items-start flex-col gap-3"
        >
          <div>
            <h1 className="font-extrabold text-6xl xl:text-7xl">Movie Mate</h1>
            <div className="flex gap-1 text-xl xl:text-3xl font-semibold">
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

          <p className="max-w-[56ch] mx-auto lg:mx-0 z-[-10] font-Poppins font-[500] text-black/85">
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
            className="mt-3 z-[-1]"
          >
            <Link to="/signup">
              <Button className="max-w-fit h-fit bg-steelBlue shadow-lg text-lg px-4 hover:bg-steelBlue active:bg-steelBlueDark focus:outline-none">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate={animationVariants}
          whileInView="visible"
          transition={
            ({ transition: 3, type: "spring", stiffness: 100 }, { delay: 0.25 })
          }
          viewport={{ once: true }}
          className="flex-[4] hidden z-[-10] lg:inline"
        >
          <img
            src={heroimg}
            className="w-full scale-110"
            alt="friends-enjoying-movie"
          />
        </motion.div>
      </div>
    </div>
  );
};
