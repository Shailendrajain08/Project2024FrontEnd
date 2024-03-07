import React from 'react';

const HowItWorkTab: React.FC<any> = ({ isShowClassName, svgIcon, title, subTitle1, subtitle2 }) => {
  return (
    <div
      className={`d-flex ps-2 pb-3 position-relative bg_active_tab transition600 mt-2 rounded-3 z-3 pt-3 tab_button ${
        isShowClassName ? 'tab_bg_gray' : 'tab_bg_transparent'
      }`}>
      <span className="d-inline-block me-3">{svgIcon}</span>
      <div className="d-flex flex-column ps-1 ">
        <h3 className="fs_2xl fw-semibold leading_120 mb-1">{title}</h3>
        <p className="common_pera leading_130 mb-0 pera_how_work_w_custom">
          {subTitle1}
          {subtitle2 && <span className="d-xl-block">{subtitle2}</span>}
        </p>
      </div>
    </div>
  );
};

export default HowItWorkTab;
