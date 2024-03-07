import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import { useInView } from 'react-intersection-observer';
import HowItWorkTab from './HowItWorkTab';
import {
  VideoInterviewSvg,
  HireExpertSvg,
  GetQualitySvg,
  PaymentSvg
} from '../../../../assets/svg';
import tab1 from '../../../../assets/lottie/tab-1-lottie.json';
import tab2 from '../../../../assets/lottie/tab-2-lottie.json';
import tab3 from '../../../../assets/lottie/tab-3-lottie.json';
import tab4 from '../../../../assets/lottie/tab-4-lottie.json';
import { getIndex } from '../../utils';
import { initialShowClassName } from '../../../../constants/home';
import './index.css';

const HowItWorks: React.FC<any> = () => {
  const { ref, inView } = useInView({ threshold: 0 });
  const [showClassName, setShowClassName] = useState<any>({
    1: true,
    2: false,
    3: false,
    4: false
  });

  useEffect(() => {
    let timer: any = null;
    if (inView) {
      timer = setInterval(() => {
        const index = getIndex(showClassName);
        setShowClassName({ ...initialShowClassName, [index]: true });
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [inView, showClassName]);

  return (
    <Box component={'section'} id="how-works" className="how-it-works--section">
      <Container className="how-it-works--container">
        <Grid container justifyContent={'center'}>
          <Grid item sm={11} md={6} lg={5}>
            <Box>
              <Box className="how-it-works--heading-box">
                <Typography variant="h2" className="how-it-works--heading-box--text">
                  How it{' '}
                  <Typography component={'span'} className="how-it-works--heading-box--text">
                    Works
                  </Typography>
                </Typography>
              </Box>
              <Box position={'relative'} className="line__Before">
                <HowItWorkTab
                  isShowClassName={showClassName[1]}
                  svgIcon={<VideoInterviewSvg />}
                  title="Video interview the experts"
                  subTitle="Live video chat & Hire Top 1% Global coder in a click."
                  subTitleClassName="how-it-works--tab-1-subtext"
                />
                <HowItWorkTab
                  isShowClassName={showClassName[2]}
                  svgIcon={<HireExpertSvg />}
                  title="Hire Expert coder"
                  subTitle="Assign Project & Tasks for your project."
                  subTitleClassName="how-it-works--tab-2-subtext"
                />
                <HowItWorkTab
                  isShowClassName={showClassName[3]}
                  svgIcon={<GetQualitySvg />}
                  title="Get quality work done"
                  subTitle="Scrum & Project Delivery Managed by Us."
                  subTitleClassName="how-it-works--tab-3-subtext"
                />
                <HowItWorkTab
                  isShowClassName={showClassName[4]}
                  svgIcon={<PaymentSvg />}
                  title="Pay when you’re satisfied"
                  subTitle="Pay Only when task is done as Scrum Managed by Us."
                  subTitleClassName="how-it-works--tab-4-subtext"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={11} md={6} lg={7} display={'flex'} justifyContent={'center'} ref={ref}>
            <Box className="how-it-works--svg-box-container">
              {showClassName[1] && (
                <Box className="how-it-works--svg-box" id="tab1">
                  <Lottie
                    className={`tab-data ${
                      showClassName[1] ? 'image_come' : 'image_goBack'
                    } img_w_exp_custom`}
                    animationData={tab1}
                    loop={true}
                    autoplay={true}
                  />
                </Box>
              )}
              {showClassName[2] && (
                <Box className="how-it-works--svg-box" id="tab2">
                  <Lottie
                    className={`tab-data ${
                      showClassName[2] ? 'image_come' : 'image_goBack'
                    } img_w_exp_custom`}
                    animationData={tab2}
                    loop={true}
                    autoplay={true}
                  />
                </Box>
              )}
              {showClassName[3] && (
                <Box className="how-it-works--svg-box" id="tab3">
                  <Lottie
                    className={`tab-data ${
                      showClassName[3] ? 'image_come' : 'image_goBack'
                    } img_w_exp_custom`}
                    animationData={tab3}
                    loop={true}
                    autoplay={true}
                  />
                </Box>
              )}
              {showClassName[4] && (
                <Box className="how-it-works--svg-box" id="tab4">
                  <Lottie
                    className={`tab-data ${
                      showClassName[4] ? 'image_come' : 'image_goBack'
                    } img_w_exp_custom`}
                    animationData={tab4}
                    loop={true}
                    autoplay={true}
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
