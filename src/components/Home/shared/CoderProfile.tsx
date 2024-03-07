import React from 'react';

const CoderProfileCard: React.FC<any> = ({ profile, handleChat }) => {
  const { name, hourlyRate, role, rating, skills = [], profileUrl } = profile;
  return (
    <div>
      <div className="bg-white coder_card p-2">
        <div className="coder_card_img overflow-hidden">
          <img className="w-100 " src={profileUrl} alt="coder-img" />
        </div>
        <div className="d-flex align-items-center justify-content-between mb-1 mt-2 pt-lg-1">
          <h2 className="fs_sm fw-medium clr_black mb-0">{name}</h2>
          <p className="fs_xs fw-normal clr_black mb-0">{hourlyRate}</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="fs_xxs fw-normal clr_black opacity_6 mb-0">{role}</p>
          <div className="d-flex align-items-center gap-1">
            <img src="images/svg/star.svg" alt="star-img" />
            <p className="fs_xxs fw-normal clr_black opacity_6 mb-0">{rating}</p>
          </div>
        </div>

        <div className="d-flex flex-wrap align-items-center gap-1 my-2 mb-md-3">
          {skills.map((skill: string, i: number) => {
            return (
              <button
                className="fs_xxxs fw-medium text-black opacity-75 coder_card_btn bg-transparent"
                key={i}>
                {skill}
              </button>
            );
          })}
        </div>
        <div className="d-flex justify-content-start">
          <button
            className="fs_xs fw-semibold text-white chat_btn bg_secondary"
            onClick={handleChat}>
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoderProfileCard;
