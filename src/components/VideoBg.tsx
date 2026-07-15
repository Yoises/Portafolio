import { videos } from "../constants/video";

function VideoBackground() {
  console.log("Ruta del video:", videos.background);
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videos.background} type="video/mp4" />
      </video>
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black/80" />
    </div>
  );
}

export default VideoBackground;