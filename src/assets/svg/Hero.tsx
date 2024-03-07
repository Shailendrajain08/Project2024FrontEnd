export const HeroBackgroundSvg = () => {
  return (
    <svg
      className="home-hero-background-svg position-absolute bottom-0 start-25 translate-middle-x z-0"
      width="200%"
      height="100%"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      overflow="auto"
      shapeRendering="auto"
      fill="#FCFCFC">
      <defs>
        <path
          id="wavepath"
          d="M 0 2000 0 500 Q 150 326 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
        />
      </defs>
      <g>
        <use xlinkHref="#wavepath" y="384" fill="#fff"></use>
      </g>
    </svg>
  );
};
