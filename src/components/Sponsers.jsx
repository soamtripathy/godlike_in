import sponser_1 from "../assets/heroxtreame.jpg";
import sponser_2 from "../assets/realme.png";

export const Sponsers = () => {
  return (
    <div className="mx-5 my-10">
      <h1 className="font-bold text-4xl text-yellow-400 mt-5">Our Sponsers</h1>

      <div className="flex flex-col md:flex-row h-auto md:h-40 py-10">
        <div className="px-10 mb-5 md:mb-0">
          <img
            src={sponser_1}
            alt="Sponser 1"
            className="h-40 w-full md:w-64 object-contain"
          />
        </div>
        <div className="px-10">
          <img
            src={sponser_2}
            alt="Sponser 2"
            className="h-40 w-full md:w-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
};
