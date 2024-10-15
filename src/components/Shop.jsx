export const Shop = () => {
  return (
    <div className="mt-5 p-5 max-w-1600px h-full">
      <h1 className="text-yellow-400 font-bold text-4xl mb-5">Our Store</h1>
      <div className="card my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-800 md:max-w-xl md:flex-row border-2 border-yellow-400">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://firebasestorage.googleapis.com/v0/b/dacby-database.appspot.com/o/10%20Images%2Fgodlike_no_bg_2040x2040.webp?alt=media&token=da038071-4bb0-4b28-b98a-c49825a33c7c"
            alt="Godlike Official Jersey Limited Edition"
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-yellow-400">
              Godlike Official Jersey Limited Edition
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Elevate your style with our exclusive limited edition jerseys,
              available only from Godlike Esports. Designed for dedicated fans
              and gamers, these jerseys are crafted from premium materials for
              ultimate comfort and performance.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://dacby.com/product-detail/?pid=bpL&Name=Godlike-Official-Jersey-Limited-Edition-|-Size---XXL-(New).html")
              }
              className="mt-auto bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-800 md:max-w-xl md:flex-row border-2 border-yellow-400">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://firebasestorage.googleapis.com/v0/b/dacby-database.appspot.com/o/10%20Images%2Fgodlike_no_bg_2040x2040.webp?alt=media&token=da038071-4bb0-4b28-b98a-c49825a33c7c"
            alt="Godlike Official Jersey Limited Edition - Player Signed"
          />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-xl font-medium text-yellow-400">
              Godlike Official Jersey Limited Edition - Player Signed
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Own a piece of esports history with our player-signed jerseys,
              featuring autographs from your favorite Godlike Esports players.
              These unique collectibles are perfect for true fans and collectors
              alike, combining style and authenticity.
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://dacby.com/product-detail/?pid=bpL&Name=Godlike-Official-Jersey-Limited-Edition-|-Size---XXL-(New).html")
              }
              className="mt-auto bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
