import ReactPlayer from "react-player";

export const Videos = () => {
  return (
    <div className="mt-5 p-5 max-w-7xl mx-auto h-full">
      <h1 className="text-yellow-400 font-bold text-4xl mb-5">Our Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/u7BdsvNcC8E?si=5bicVdfyzaUY4hlG"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/P34vdNO-CV4?si=YPGuwFANhl2oc8Qy"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/66E3FRcjdgY?si=JiRiI7lKPLeVEHjf"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/u4Ompn5Pyzc?si=QAR5D2IrmOz7mHsR"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/TOGI_0cCAlE?si=SD6D1KXyQ-qmyUsz"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-8">
          <ReactPlayer
            url="https://youtu.be/U5xe9s3R2OE?si=Fhl8yJZi6KhZ0qZy"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

