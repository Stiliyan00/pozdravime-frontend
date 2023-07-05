import "./VoiceCard.scss";
import Button from '../Button/Button';
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { useNavigate } from "react-router-dom";
import VoiceCardImage from "../VoiceCardImage/VoiceCardImage";

const VoiceCard = ({ image, recording, actor }) => {
  const navigate = useNavigate();

  const onVoiceCardSelect = () => {
    navigate(`/${actor}`)
  };

  return <div className="VoiceCard">
      <VoiceCardImage image={image} onVoiceCardSelect={onVoiceCardSelect}/>
      <p className="VoiceCardCelebrity">{actor}</p>
      <div className="VoiceCardButtons">
      <AudioPlayer recording={recording} />
      <Button label="Направи поздрав" onClick={onVoiceCardSelect}/>
      </div>

  </div>;
};

export default VoiceCard;
