export const heroCardSlider = {
  dots: false,
  className: 'center',
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const coderVideoProfile = {
  dots: false,
  pauseOnHover: true,
  arrows: true,
  infinite: true,
  focusOnSelect: true,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  className: 'z_999 coder-video-profile--slick-slide-box',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export const coderCardSlider = {
  dots: true,
  pauseOnHover: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const getIndex = (showClassName: any) => {
  const currentIndex = Object.keys(showClassName).find((key: string) => showClassName[key]) || 1;
  return Number(currentIndex) < 4 ? Number(currentIndex) + 1 : 1;
};
