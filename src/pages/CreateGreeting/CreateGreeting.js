import { useState } from "react";
import { useParams } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Input from "../../components/Input/Input";
import Page from "../../components/Page/Page";
import TextArea from "../../components/TextArea/TextArea";
import VoiceCardImage from "../../components/VoiceCardImage/VoiceCardImage";
import CONFIG from "../../utils/config";
import "./CreateGreeting.scss";

const CreateGreeting = () => {
  const [email, setEmail] = useState("");
  const [greeting, setGreeting] = useState("");
  const [acceptedTC, setAcceptedTc] = useState(false);
  const [sentMoney, setSentMoney] = useState(false);

  const { actor } = useParams();

  const { image, recording } = CONFIG.VOICE_CARDS.find(
    (voiceCard) => voiceCard.actor === actor
  );

  const handleEmailInputChange = (ev) => {
    setEmail(ev.target.value);
  };

  const handleGreetingInputChange = (ev) => {
    setGreeting(ev.target.value);
  };

  const handleAcceptedTcChange = (ev) => {
    setAcceptedTc(ev.target.checked);
  };

  const handleSentMoneyChange = (ev) => {
    setSentMoney(ev.target.checked);
  };

  const onSubmit = async () => {
      fetch("http://16.171.17.161:8080/greetings", {
        method: "POST",
        cache: "no-cache",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          greetingText: greeting,
          email,
          actor,
        }),
      }).then((res) => res.json())
    
  };

  return (
    <Page>
      <div className="CreateGreeting">
        <div className="CreateGreetingSummary">
          <p className="CreateGreetingText">Направи поздрав от {actor}</p>
          <VoiceCardImage image={image} />
          <AudioPlayer recording={recording} />
        </div>
        <div className="GreetingInfo">
          <div className="GeneralHowTo">
            <p className="RevolutInfo">
              1. Всеки поздрав е на цена 10 лв. с ДДС. Изпрати сумата на следния
              револют акаунт - тук е акаунта.
            </p>
            <p className="HowToInfo">
              2. Въведи email адреса си и текста, който искаш в полетата долу.
            </p>
            <p className="ProcedureInfo">
              3. След като потвърдим, че плащането е извършено, ние ще създадем
              твоя персонализиран поздрав и ще ти го изпратим.
            </p>
          </div>
          <div className="GreetingForm">
            <Input
              id="email"
              name="emailInput"
              label="Email"
              value={email}
              onChange={handleEmailInputChange}
            />
            <TextArea
              id="greeting"
              name="greetingInput"
              label="Текст за поздрав"
              value={greeting}
              onChange={handleGreetingInputChange}
            />
            <Checkbox
              label={<p>Съгласен съм с <a href="/terms-and-conditions">общите условия за ползване.</a></p>}
              value={acceptedTC}
              onChange={handleAcceptedTcChange}
            />
            <Checkbox
              label="Потвърждавам, че заплатих поздрава на посочената банкова сметка."
              value={sentMoney}
              onChange={handleSentMoneyChange}
            />
            <Button label="Създай поздрав" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default CreateGreeting;
