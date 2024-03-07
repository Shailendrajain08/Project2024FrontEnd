import React, { useState, useEffect } from 'react';
import { Box, Container, Button } from '@mui/material';
import NavBar from './components/NavBar';
import { HeroBackgroundSvg } from '../../../../assets/svg';
import TextTypeAnimation from './components/TextAnimation';
import './index.css';
import TrasedCoder from './components/TrasedCoder';
import { RootState } from '../../../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedTech as getRecommendedTechAction } from '../../../../store/actions/recommended';

const HeroComponent: React.FC<any> = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);
  const dispatch = useDispatch();
  const recommendedTechData = useSelector((state: RootState) => state?.recommendedTech);
  const { recommendedTech, loading }: any = recommendedTechData;

  useEffect(() => {
    if (recommendedTech && !recommendedTech.length) {
      dispatch(getRecommendedTechAction());
    }
  }, []);

  const handleHideNav = () => {
    setIsToggle(false);
  };
  const handleToggleSide = () => {
    setIsToggle(true);
  };

  const handleSkillClick = () => {
    console.log('test');
  };

  return (
    <Box component={'section'} className="hero-component--box-section">
      <HeroBackgroundSvg />
      <Box className="hero-component--treased-box">
        <Box className="hero-component--treased-coder-box">
          <TrasedCoder />
        </Box>
      </Box>
      <Box position={'relative'}>
        <NavBar
          handleHideNav={handleHideNav}
          handleToggleSide={handleToggleSide}
          isToggle={isToggle}
        />
        <Container className="home-hero-section--container">
          <TextTypeAnimation />
          <Box className="hs--hero-world-map-parent lg--display-none">
            <Box position={'absolute'} right={0} className="hero_world_map">
              <TrasedCoder />
            </Box>
          </Box>
          <Box className="home-hc--recommended-skill-box">
            {!loading && recommendedTech.length
              ? recommendedTech.map((tech: any) => {
                  return (
                    <Button
                      key={tech.id}
                      onClick={handleSkillClick}
                      className="home-hc--recommended-skill-btn">
                      {tech.name}
                    </Button>
                  );
                })
              : null}
          </Box>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default HeroComponent;
