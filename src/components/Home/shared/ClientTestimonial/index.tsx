import React from 'react';
import { Box, Container, Link } from '@mui/material';
import './index.css';

const ClientTestimonial: React.FC<any> = ({ clientTestimonial = [] }) => {
  return (
    <Box component={'section'} className="home-client-testimonial-section">
      <Container className="home-client-testimonial-container">
        <Box className="hct--scrollbar-box">
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            className="hct--scroll-animation-box">
            {clientTestimonial.map((client: any) => {
              return (
                <Link href={client?.path} key={client.id}>
                  {' '}
                  <img src={client?.logo} alt={client.name} />{' '}
                </Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientTestimonial;
