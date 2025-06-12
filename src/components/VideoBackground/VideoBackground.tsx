import "../../css/Background.css";
import bgMp4 from "../../assets/bg.mp4";
import bgWemp from "../../assets/bg.webm";

export const VideoBackground = () => {
  return (
    <div className="background-container">
      <video className="background" playsInline={true} autoPlay={true} muted={true} loop={true}>
        <source src={bgMp4} type="video/mp4" />
        <source src={bgWemp} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
