import './VoiceCardImage.scss'

const VoiceCardImage = ({ image, onVoiceCardSelect = () => {} }) => {
     const imageSrc = `${window.location.origin}/images/${image}`;

    return <img className="VoiceCardImage" src={imageSrc} alt={image} onClick={onVoiceCardSelect}/>
}

export default VoiceCardImage;