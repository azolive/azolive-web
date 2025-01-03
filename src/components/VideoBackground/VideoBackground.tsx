import "./VideoBackground.css";
import backgroundVideo from "../../assets/bg.webm";

export const VideoBackground = () => {
  console.log(backgroundVideo);
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
