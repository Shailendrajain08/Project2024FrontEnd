import React, { Fragment } from 'react';
import { Typography, Link, List } from '@mui/material';
import { InstagramSvg, FacebookSvg, TwitterSvg } from '../../../../../../assets/svg';

const SocialIcons: React.FC<any> = () => {
  return (
    <Fragment>
      <Typography
        component="h2"
        className="ff_Inter fs_sm  leading_130"
        fontWeight="normal"
        color="#FFFFFF">
        Follow Us
      </Typography>
      <List component="ul" sx={{ p: 0, m: 0, display: 'flex', gap: 3 }}>
        <List component="li">
          <Link href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
            <Typography
              component="span"
              className="svh_footer_animation"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <InstagramSvg />
            </Typography>
          </Link>
        </List>
        <List component="li">
          <Link
            href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20login%20account%7C&placement=&creative=589460569900&keyword=facebook%20login%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296914611740%26loc_physical_ms%3D1007766%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfiefQUuA2_zqW4xjpkjd8CkSPaAv57Gd4J7tZAPQUgCkS4t41Jdl9BoCnqMQAvD_BwE"
            target="_blank"
            rel="noreferrer">
            <Typography
              component="span"
              className="svh_footer_animation fb"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <FacebookSvg />
            </Typography>
          </Link>
        </List>
        <List component="li">
          <Link
            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
            target="_blank"
            rel="noreferrer">
            <Typography
              component="span"
              className="svh_footer_animation"
              display="flex"
              justifyContent="center"
              alignItems="center">
              <TwitterSvg />
            </Typography>
          </Link>
        </List>
      </List>
    </Fragment>
  );
};

export default SocialIcons;
