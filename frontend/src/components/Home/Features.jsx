import features from "../../assets/home/features.svg";
import homeTheatre from "../../assets/home/home-theatre.svg";
import driveIn from "../../assets/home/drive-in.svg";
import { motion } from "framer-motion";

export const Features = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-featuresBg bg-cover bg-no-repeat h-fit flex flex-col relative items-center">
      <motion.h1
        variants={animationVariants}
        initial="hidden"
        animate={animationVariants}
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl px-3 lg:text-5xl mt-12 lg:mt-24 font-bold tracking-wide text-white max-w-[35ch] font-Outfit text-center"
      >
        Your Ticket to Friendship: Movie Mate, Your Ultimate Companion App!
      </motion.h1>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={animationVariants}
        whileInView="visible"
        transition={({ duration: 0.5 }, { delay: 0.2 })}
        className="flex justify-center items-end mx-auto lg:w-[80%] w-full"
      >
        <img
          src={homeTheatre}
          alt="texting image"
          className="max-w-[25rem] hidden -mr-20 mb-20 lg:block"
        />
        <img
          src={features}
          alt="texting image"
          className="lg:max-w-[50rem] w-full"
        />
        <img
          src={driveIn}
          alt="texting image"
          className="max-w-[25rem] hidden mb-20 -ml-20 lg:block"
        />
      </motion.div>

      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        animate={animationVariants}
        transition={({ duration: 0.5 }, { delay: 0.2 })}
        className="w-full h-full bg-gray-100 py-4 lg:py-0 lg:-mt-24"
      >
        <div className="max-w-[75%] mx-auto flex flex-col lg:flex-row justify-center lg:gap-6">
          <div className="flex flex-col py-2 lg:py-8">
            <h1 className="font-bold">Expand your social circle</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Discover new friends who share your passion for movies. Browse
              profiles, view movie preferences, and send friend requests to
              connect with like-minded individuals effortlessly.
            </p>
          </div>
          <div className="flex flex-col py-2 lg:py-8">
            <h1 className="font-bold">Instant Messaging</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Instant Messaging: Connect with potential movie mates through our
              easy-to-use chat feature. Strike up conversations, discuss movie
              preferences, and make plans for your next outing directly within
              the app.
            </p>
          </div>
          <div className="flex flex-col py-2 lg:py-8">
            <h1 className="font-bold">Stay Up-to-Date with Current Movies</h1>
            <p className="max-w-[40ch] font-Poppins opacity-80">
              Explore the latest releases and stay in the loop with our
              real-time movie updates. From blockbusters to indie gems, Movie
              Mate keeps you informed about the newest additions to the cinema
              scene, ensuring you never miss a must-watch flick with your movie
              mates.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
