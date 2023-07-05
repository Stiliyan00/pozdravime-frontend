import "./AudioPlayer.scss";

const AudioPlayer = ({ recording }) => {
  const recordingSrc = `${window.location.origin}/recordings/${recording}`;

  return (
    <audio
      className="AudioPlayer"
      src={recordingSrc}
      controls
    />
  );
};

export default AudioPlayer;
