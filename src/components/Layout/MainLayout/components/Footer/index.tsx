import React, { Fragment } from 'react';
import { Box, Typography, List, Container } from '@mui/material';
import ListItem from './components/ListItem';
import SocialIcons from './components/SocialIcons';
import BoxTitle from './components/Title';
import { useNav } from '../../../../../context/NavContext';
import './index.css';

const Footer: React.FC<any> = () => {
  const { handleClose }: any = useNav();
  return (
    <Fragment>
      <Box
        component="footer"
        className="bg_footer_image"
        pt={{ xs: 3, sm: 3, md: 3, lg: 6 }}
        onClick={handleClose}>
        <Container
          className="custom_container"
          sx={{ pt: { xl: 3 }, mt: { xl: 1 }, pb: { lg: 2 } }}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box
              className="w_lg_custom"
              mr={3}
              pb={{ xs: 1, sm: 1, md: 1, lg: 0 }}
              textAlign="start">
              <a href="/">
                <img src="/images/svg/pagr_logo.svg" alt="logo footer" className="logo" />
              </a>
              <Typography
                component="p"
                className="ff_Inter fs_sm leading_130 opacity_6"
                fontWeight="normal"
                color="#FFFFFF"
                pt={{ xs: 1, sm: 1, md: 1, xl: 2 }}
                m={0}
                maxWidth={400}>
                We take pride in our team of dedicated coders, continuously striving for excellence
                in every project.
              </Typography>
            </Box>
            <Box mr={3} mt={{ xs: 3, sm: 3, md: 3, lg: 0 }} textAlign="start">
              <BoxTitle title="Home" />
              <List component="ul" sx={{ p: 0, m: 0 }}>
                <ListItem listName="Portfolio" path="#Portfolio" />
                <ListItem listName="Careers" path="#Careers" />
                <ListItem listName="Contact Us" path="#Contact" />
              </List>
            </Box>
            <Box mr={3} mt={{ xs: 3, sm: 3, md: 4, lg: 0 }} textAlign="start">
              <BoxTitle title="About Us" />
              <List component="ul" sx={{ p: 0, m: 0 }}>
                <ListItem listName="Our Team" path="#team" />
                <ListItem listName="FAQs" path="#FAQs" />
                <ListItem listName="Testimonials" path="#Testimonials" />
              </List>
            </Box>
            <Box mr={3} mt={{ xs: 3, sm: 3, md: 4, lg: 0 }} textAlign="start">
              <BoxTitle title="Services" />
              <List component="ul" sx={{ p: 0, m: 0 }}>
                <ListItem listName="Term of Services" path="#team" />
                <ListItem listName="Privacy Policy" path="#policy" />
                <ListItem listName="Careers" path="#Careers" />
              </List>
            </Box>
            <Box mr={3} mt={{ xs: 3, sm: 3, md: 4, lg: 0 }} textAlign="start">
              <BoxTitle title="Contact Us" />
              <List component="ul" sx={{ p: 0, m: 0 }}>
                <ListItem
                  listName="Call : "
                  path="tel:(316) 618 - 4557"
                  listSubText="+1(316) 618 - 4557"
                />
                <ListItem
                  listName="Text : "
                  path="msg:+1(316) 618 - 4557"
                  listSubText="+1(316) 618 - 4557"
                />
              </List>
            </Box>
            <Box mt={{ xs: 3, sm: 3, md: 4, xl: 0 }} textAlign="start">
              <SocialIcons />
            </Box>
          </Box>
        </Container>
        <Box
          className="ff_Inter fs_xs opacity-50"
          color="#FFFFFF"
          fontWeight="normal"
          textAlign="center"
          borderTop="1px solid #313132"
          py={3}
          mt={4}>
          <Typography component="p" m={0}>
            Copyright © <Typography component="span" id="Crunnt_Year"></Typography>
            Hire Coder, All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Footer;
