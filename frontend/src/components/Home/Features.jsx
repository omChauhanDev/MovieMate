import features from "../../assets/home/features.svg";
import homeTheatre from "../../assets/home/home-theatre.svg";
import featuresUnderline from "../../assets/home/featuresUnderline.svg";
import driveIn from "../../assets/home/drive-in.svg";
import { motion } from "framer-motion";

export const Features = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="h-fit bg-featuresBg bg-seaSalt flex flex-col relative items-center">
      <motion.h1
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={
          ({ transition: 2, type: "spring", stiffness: 100 }, { delay: 0.2 })
        }
        viewport={{ once: true }}
        className="text-2xl px-3 lg:text-5xl mt-24 font-bold tracking-wide font-Poppins text-center text-black/90"
      >
        Two Tickets, One Friendship <br /> Movie Mate, Where Movies Are Better
        Together!
      </motion.h1>
      <div className="relative"></div>
      <div className="flex justify-center items-end mx-auto overflow-hidden lg:max-w-[80%] w-full">
        <motion.img
          src={homeTheatre}
          alt="home theatres"
          variants={animationVariants}
          initial="hidden"
          animate={animationVariants}
          whileInView="visible"
          transition={
            ({ transition: 2, type: "spring", stiffness: 100 }, { delay: 0.2 })
          }
          viewport={{ once: true }}
          className="max-w-[25rem] hidden -mr-20 mb-20 lg:block"
        />
        <motion.img
          src={features}
          alt="texting image"
          variants={animationVariants}
          initial="hidden"
          animate={animationVariants}
          whileInView="visible"
          transition={
            ({ transition: 2, type: "spring", stiffness: 100 }, { delay: 0.35 })
          }
          viewport={{ once: true }}
          className="lg:max-w-[50rem] w-full"
        />
        <motion.img
          src={driveIn}
          alt="drive in"
          variants={{
            hidden: { opacity: 0, x: +80 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={
            ({ transition: 2, type: "spring", stiffness: 100 }, { delay: 0.5 })
          }
          viewport={{ once: true }}
          className="max-w-[25rem] hidden mb-20 -ml-20 lg:block"
        />
      </div>

      <div className="w-full h-full bg-white py-4 lg:py-0 lg:-mt-24">
        <div className="max-w-[75%] mx-auto flex flex-col lg:flex-row justify-center items-center lg:gap-6">
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationVariants}
            whileInView="visible"
            transition={
              ({ transition: 2, type: "spring", stiffness: 100 },
              { delay: 0.2 })
            }
            viewport={{ once: true }}
            className="flex flex-col py-2 lg:py-8"
          >
            <h1 className="font-bold">Expand your social circle</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Discover new friends who share your passion for movies. Browse
              profiles, view movie preferences, and send friend requests to
              connect with like-minded individuals effortlessly.
            </p>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationVariants}
            whileInView="visible"
            transition={
              ({ transition: 2, type: "spring", stiffness: 100 },
              { delay: 0.35 })
            }
            viewport={{ once: true }}
            className="flex flex-col py-2 lg:py-8"
          >
            <h1 className="font-bold">Instant Messaging</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Instant Messaging: Connect with potential movie mates through our
              easy-to-use chat feature. Strike up conversations, discuss movie
              preferences, and make plans for your next outing directly within
              the app.
            </p>
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={animationVariants}
            whileInView="visible"
            transition={
              ({ transition: 2, type: "spring", stiffness: 100 },
              { delay: 0.5 })
            }
            viewport={{ once: true }}
            className="flex flex-col py-2 lg:py-8"
          >
            <h1 className="font-bold">Stay Up-to-Date with Current Movies</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Explore the latest releases and stay in the loop with our
              real-time movie updates. From blockbusters to indie gems, Movie
              Mate keeps you informed about the newest additions to the cinema
              scene, ensuring you never miss a must-watch flick with your movie
              mates.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
