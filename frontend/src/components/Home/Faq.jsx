import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Faq = () => {
  return (
    <div className="w-full py-8 lg:py-0 bg-seaSalt">
      <div className="w-[90%] lg:w-[70%] mx-auto lg:flex-row flex-col flex">
        <div className="font-bold flex-[2] py-4 flex justify-center items-center">
          <h1 className="font-Poppins text-2xl">What is Movie Mate, again?</h1>
        </div>

        <div className="flex-[2] py-5">
          <Accordion
            type="single"
            collapsible
            className="lg:max-w-[80%] mx-auto"
          >
            <AccordionItem value="item-1" className="border-b-gray-400">
              <AccordionTrigger className="text-lg font-Poppins text-left">
                What is Movie Mate and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] text-black/80 tracking-tight font-Poppins">
                Movie Mate is a social app designed to help you find companions
                to watch movies with. You can sign up, specify your preferences,
                and based on your location and movie interests, the app will
                suggest potential movie buddies near you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-gray-400">
              <AccordionTrigger className="text-lg font-Poppins text-left">
                Is my personal information safe on Movie Mate?
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] text-black/80 tracking-tight font-Poppins">
                Absolutely. We take your privacy seriously. Your personal
                information, including your city and state, is used solely for
                the purpose of matching you with movie companions and is not
                shared with third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-gray-400">
              <AccordionTrigger className="text-lg font-Poppins text-left">
                Is there a fee to use Movie Mate?
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] text-black/80 tracking-tight font-Poppins">
                No, Movie Mate is free to download and use. There are no hidden
                fees or subscriptions required to access its features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b-gray-400">
              <AccordionTrigger className="text-lg font-Poppins text-left">
                How do I ensure a safe and enjoyable movie-watching experience
                with my matches?
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] text-black/80 tracking-tight font-Poppins">
                We encourage users to communicate within the app and get to know
                their potential movie buddies before meeting up. Additionally,
                always arrange to meet in public places and let someone know
                your plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b-0">
              <AccordionTrigger className="text-lg font-Poppins text-left">
                Is there a minimum age requirement to use Movie Mate?
              </AccordionTrigger>
              <AccordionContent className="text-[1rem] text-black/80 tracking-tight font-Poppins">
                Movie Mate is intended for users who are 18 years old and above.
                We believe this age requirement ensures a more mature and
                responsible user base for a safer and enjoyable movie-watching
                experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
