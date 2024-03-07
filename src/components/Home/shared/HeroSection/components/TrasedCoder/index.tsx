import React, { Fragment } from 'react';
import CoderBox from '../CoderBox';

const TrasedCoder: React.FC<any> = () => {
  return (
    <Fragment>
      <CoderBox
        className="trased_user_box_1"
        name="USA"
        imageUrl="images/svg/Trased-user-1.svg"
        altText="trased user 1"
      />
      <CoderBox
        className="trased_user_box_2 z-0"
        name="Canada"
        imageUrl="images/svg/Trased-user-2.svg"
        altText="trased user 2"
      />
      <CoderBox
        className="trased_user_box_3 z-1"
        name="Brazil"
        imageUrl="images/svg/Trased-user-3.svg"
        altText="trased user 3"
      />
      <CoderBox
        className="trased_user_box_4"
        name="Libya"
        imageUrl="images/svg/Trased-user-4.svg"
        altText="trased user 4"
      />
      <CoderBox
        className="trased_user_box_5"
        name="India"
        imageUrl="images/svg/Trased-user-5.svg"
        altText="trased user 5"
      />
      <img
        className="hero_world_map mix_bland_screen z-2"
        src="images/webp/hero_map.webp"
        alt="world-map"
      />
    </Fragment>
  );
};

export default TrasedCoder;
