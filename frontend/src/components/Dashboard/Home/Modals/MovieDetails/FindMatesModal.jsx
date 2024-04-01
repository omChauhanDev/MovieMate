const dummyData = [
  {
    name: "Akshat Dubey",
    age: "20",
    gender: "Male",
    interestedIn: "Anime",
  },
  {
    name: "Dhruv Kaushik",
    age: "18",
    gender: "Male",
    interestedIn: "Anime",
  },
  {
    name: "Vishesh Shah",
    age: "24",
    gender: "Male",
    interestedIn: "Anime",
  },
  {
    name: "Om Chauhan",
    age: "17",
    gender: "Male",
    interestedIn: "Anime",
  },
  {
    name: "Khushi Bansal",
    age: "21",
    gender: "Male",
    interestedIn: "Anime",
  },
];

const FindMatesModal = ({ movie, setFindMatesModal }) => {
  return (
    <div
      onClick={() => setFindMatesModal(false)}
      className="w-full h-full top-0 bg-black/40 left-0 fixed z-[22] overflow-y-auto modalOpen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="left-1/2 top-1/2 absolute -translate-y-1/2 -translate-x-1/2 max-w-4xl overflow-y-auto w-full rounded-lg py-6 px-8 bg-white -translate-1/2 z-[23] modalOpen"
      >
        <h1 className="text-3xl mb-4 text-center font-semibold">
          People who are interested in watching {movie.title}
        </h1>
        <div className="space-y-3 ">
          {/* map over the interested people here */}
          {dummyData.map((person) => {
            return (
              <div
                key={person.name}
                className="flex items-center justify-between w-full bg-zinc-200 gap-3 rounded-lg py-2 px-4 "
              >
                <div className="flex gap-3">
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/74/9b/d1/749bd157-c81b-2c54-9940-16c13cecaa95/e5e09754-1d06-4a09-b2e1-6c24f77e0157_file_cropped.png/486x486bb.png"
                    alt="profile pic"
                    className="rounded-full max-w-[3rem] max-h-[3rem] object-cover my-auto aspect-square"
                  />

                  <div className="flex-col text-[1em]">
                    <h1 className="font-medium">{person.name}</h1>
                    <div className="flex text-[0.8em] -translate-y-1 text-zinc-600">
                      <h4>{`${person.age}, `}</h4>
                      <h4> {person.gender}</h4>
                    </div>
                  </div>
                </div>

                <button className="justify-self-end text-white bg-steelBlue rounded-lg text-sm px-4 py-2 h-fit">
                  Send Mate Request
                </button>
              </div>
            );
          })}
        </div>
        <h5 className="text-center my-3 text-zinc-600">
          Didn&apos;t find your mate?
        </h5>
        <button className="w-full text-white bg-steelBlue rounded-lg px-4 py-2 h-fit">
          Add me on the list!
        </button>
      </div>
    </div>
  );
};

export default FindMatesModal;
