import React, { Fragment } from 'react';
import Slider from 'react-slick';
import CoderVideoCard from '../CoderVideoCard';
import NextArrowSlider from '../../../NextArrow';
import PreviousArrowSlider from '../../../PreviousArrow';
import { coderVideoProfile } from '../../../../utils';

const CoderVideoSlider: React.FC<any> = ({ handleVideoPlay, coderVideoCardData = [] }) => {
  const sliderSetting = {
    ...coderVideoProfile,
    nextArrow: <NextArrowSlider />,
    prevArrow: <PreviousArrowSlider />
  };

  return (
    <Slider {...sliderSetting}>
      {coderVideoCardData.map((coderData: TCoderVideoCard, index: number) => {
        return (
          <Fragment key={index}>
            <CoderVideoCard
              handleClick={(videoPath: any) => handleVideoPlay(videoPath)}
              {...coderData}
            />
          </Fragment>
        );
      })}
    </Slider>
  );
};

export default CoderVideoSlider;
