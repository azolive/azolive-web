import "./VideoBackground.css";
import bgMp4 from "../../assets/bg.mp4";
import bgWemp from "../../assets/bg.webm";

export const VideoBackground = () => {
  return (
    <div className="video-container">
      <video className="background-video" playsInline={true} autoPlay={true} muted={true} loop={true}>
        <source src={bgMp4} type="video/mp4" />
        <source src={bgWemp} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
