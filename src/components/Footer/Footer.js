import "./Footer.scss";

const Footer = () => {
    const imgSrcPrefix = `${window.location.origin}/icons`;
  return (
    <div className="Footer">
      <div className="SocialMedias">
        <img src={`${imgSrcPrefix}/instagram.png`}></img>
        <img src={`${imgSrcPrefix}/tiktok.png`}></img>
      </div>
    </div>
  );
};

export default Footer;
