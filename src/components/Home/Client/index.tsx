import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Link } from '@mui/material';
import HeroComponent from '../shared/HeroSection';
import {
  recommendedTechnology,
  recommendedCoders,
  clientTestimonial,
  coderTotalExperience,
  coderCardData,
  coderVideoCardData,
  totalExperienceSvgObject
} from '../../../constants/home';
import ClientTestimonial from '../shared/ClientTestimonial';
import OurTopCoder from '../shared/OurTopCoder';
import OurBuildTeam from '../shared/OurTeam';
import OurExperience from '../shared/OurExperience';
import './index.css';
import HowItWorks from '../shared/HowItWorks';
import { ScrollArrowSvg } from '../../../assets/svg';
import Footer from '../../Layout/MainLayout/components/Footer';
import RecommendedCoder from './RecommendedCoders';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { getRecommendedCoder } from '../../../store/actions/recommended';

const ClientHomeComponent: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const dispatch = useDispatch();
  const recommendedCoderSelector = useSelector((state: RootState) => state?.recommendedCoder);
  useEffect(() => {
    getRecommendedData();
  }, []);

  const getRecommendedData = useCallback(() => {
    dispatch(getRecommendedCoder());
  }, [recommendedCoderSelector]);

  return (
    <Box className="home-coder-cmp--box">
      <Box className="home-coder-cmp--hero-box">
        <HeroComponent>
          <RecommendedCoder recommendedCoders={recommendedCoderSelector?.recommendedCoder} />
        </HeroComponent>
        <ClientTestimonial clientTestimonial={clientTestimonial} />
      </Box>
      <Box ref={ref}>
        <OurTopCoder coderCardData={coderCardData} coderVideoCardData={coderVideoCardData} />
        <OurBuildTeam />
        <OurExperience
          coderTotalExperience={coderTotalExperience}
          totalExperienceSvgObject={totalExperienceSvgObject}
        />
        <HowItWorks />
        <Footer />
        <Link aria-label="close popup" href="#" id="scroll" className={inView ? `scroll_show` : ''}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} component="span">
            <ScrollArrowSvg />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ClientHomeComponent;
