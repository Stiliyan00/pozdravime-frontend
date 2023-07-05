import Page from "../../components/Page/Page";
import VoiceCard from "../../components/VoiceCard/VoiceCard";
import CONFIG from "../../utils/config";
import "./Home.scss";

const Home = () => {
  return (
    <Page>
      <div className="Home">
        <div className="VoiceCards">
          {CONFIG.VOICE_CARDS.map(({ id, image, recording, actor }) => (
            <VoiceCard key={id} image={image} recording={recording} actor={actor} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
