import esportsTeam_1 from "../assets/bgmi.jpg";
import esportsTeam_2 from "../assets/cod.jpg";
import esportsTeam_3 from "../assets/pokemon.jpg";

export const EsportsTeam = () => {
  return (
    <div className="teams m-5">
      <h1 className="font-bold text-4xl text-yellow-400">Our Teams</h1>

      <section className="text-gray-400 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={esportsTeam_1}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Battlegrouns Mobile India
              </h2>
             
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={esportsTeam_2}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Call of Duty Mobile
              </h2>
             
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={esportsTeam_3}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
               Pokemon Unite Mobile
              </h2>
              
              <a className="text-indigo-400 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
