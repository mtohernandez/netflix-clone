import React from "react";
import BannerContainer from "../styled/Focused/BannerContainer";
import BannerContent from "../styled/Focused/BannerContent";
import BannerDescription from "../styled/Focused/BannerDescription";
import VideoBackground from "../styled/Stylish/VideoBackground";
import SeparatedContainer from "../styled/Containers/SeparatedContainer";
import {
  InformationIcon,
  NetflixIcon,
  NetflixNIcon,
  PlayIcon,
} from "../../icons";
import H3Text from "../styled/Text/H3Text";
import H1Text from "../styled/Text/H1Text";
import ParagraphP from "../styled/Text/ParagraphP";
import ImageLogo from "../styled/Stylish/ImageLogo";
import truncate from "../../utils/truncate";
import ButtonPlay from "../styled/Form/ButtonPlay";
import ButtonLightInfo from "../styled/Form/ButtonLightInfo";
import { imageBaseUrl } from "../../api/requests";

const Banner = (props) => {
  const { videoRef, videoUrl, posterUrl, handleVideoEnded, autoPlay, movie } =
    props;

  return (
    <BannerContainer>
      <BannerContent>
        <VideoBackground
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          onEnded={handleVideoEnded}
          autoPlay={autoPlay}
          muted
        />
        <BannerDescription>
          <SeparatedContainer>
            <NetflixNIcon />
            <H3Text>M O V I E S</H3Text>
          </SeparatedContainer>
          {movie.movieImage.logos[0] ? (
            <ImageLogo
              src={`https://image.tmdb.org/t/p/original/${movie.movieImage.logos[0].file_path}`}
              alt={movie.movie.title || movie.movie.name}
            />
          ) : (
            <H1Text $huge>{movie.movie.title || movie.movie.name}</H1Text>
          )}
          <ParagraphP $maxWidth="600px">
            {truncate(movie.movie.overview, 200)}
          </ParagraphP>
          <SeparatedContainer>
            <ButtonPlay>
              <PlayIcon />
              Play
            </ButtonPlay>
            <ButtonLightInfo>
              <InformationIcon />
              More Info
            </ButtonLightInfo>
          </SeparatedContainer>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
