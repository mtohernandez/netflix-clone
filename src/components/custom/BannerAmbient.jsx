import {
  AmbientContainer,
  AmbientElement,
  AmbientVideo,
} from "../styled/Stylish/AmbientVideoBackground";
import PropTypes from "prop-types";

const BannerAmbient = (props) => {
  return (
    <AmbientContainer>
      <AmbientElement>
        <AmbientVideo
          ref={props.videoRef}
          src={props.videoUrl}
          poster={props.posterUrl}
          onEnded={props.handleVideoEnded}
          autoPlay={props.autoPlay}
          muted
        />
      </AmbientElement>
    </AmbientContainer>
  );
};

BannerAmbient.propTypes = {
  videoRef: PropTypes.object.isRequired,
  videoUrl: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  handleVideoEnded: PropTypes.func.isRequired,
  autoPlay: PropTypes.bool.isRequired,
};

export default BannerAmbient;
