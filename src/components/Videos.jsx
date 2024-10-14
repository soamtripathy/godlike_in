import ReactPlayer from "react-player";

export const Videos = () => {
  return (
    <div className="mt-5 p-5 max-w-1600px h-100%">
      <h1 className="text-yellow-400 font-bold text-4xl">Recent Videos</h1>

      <div className="grid grid-cols-3 py-5 gap-5">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=u7BdsvNcC8E"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
        <ReactPlayer
          url="https://youtu.be/P34vdNO-CV4?si=ui89Q37k9X8gy17N"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
        <ReactPlayer
          url="https://youtu.be/66E3FRcjdgY?si=fD4M4l1jscJ1BW4G"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
        <ReactPlayer
          url="https://youtu.be/66E3FRcjdgY?si=fD4M4l1jscJ1BW4G"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
        <ReactPlayer
          url="https://youtu.be/U5xe9s3R2OE?si=ywUtIoPUAW2AHRgN"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
        <ReactPlayer
          url="https://youtu.be/U5xe9s3R2OE?si=ywUtIoPUAW2AHRgN"
          width="400px"
          height="300px"
          style={{ margin: "5px" }}
        />
      </div>
    </div>
  );
};
