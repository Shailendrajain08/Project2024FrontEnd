import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Link } from '@mui/material';
import HeroComponent from '../shared/HeroSection';
import RecommendedJobs from './RecommendedJobs';
import {
  recommendedTechnology,
  recommendedJobs,
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

const CoderHomeComponent: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  return (
    <Box className="home-coder-cmp--box">
      <Box className="home-coder-cmp--hero-box">
        <HeroComponent recommendedTechnology={recommendedTechnology}>
          <RecommendedJobs recommendedJobs={recommendedJobs} />
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

export default CoderHomeComponent;
