import CornerSvg from "./corner.svg";
import LogoSvg from "./death-note-white.svg";

const Content = () => {
  return (
    <>
      <div className="content">
          <img className="content__corner content__corner-1" src={CornerSvg} alt="corner" />
          <img className="content__corner content__corner-2" src={CornerSvg} alt="corner" />
          <img className="content__corner content__corner-3" src={CornerSvg} alt="corner" />
          <img className="content__corner content__corner-4" src={CornerSvg} alt="corner" />
          <img className="content__logo" src={LogoSvg} alt="logo" />
      </div>
    </>
  );
};
export default Content;
