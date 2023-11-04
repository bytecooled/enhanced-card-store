import React, { useContext, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { ColorModeContext } from '../context/ColorModeProvider';
import { useMode } from '../context/hooks/colormode';
import HeaderTitle from '../components/reusable/HeaderTitle';
import useStyles from './styles';
// import Hero from './pageStyles/Hero';

const carouselImages = [
  { image: '/images/yugioh.jpeg', caption: 'Yu-Gi-Oh!' },
  { image: '/images/pokemon.jpeg', caption: 'Pokemon' },
  {
    image: '/images/magic-the-gathering.jpeg',
    caption: 'Magic: The Gathering',
  },
];

const HomeBanner = ({ children }) => {
  return (
    <Box
      className="home-banner"
      sx={{
        backgroundImage: (theme) =>
          `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.main})`,
        Height: '100vh',
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

const CarouselImage = ({ image, caption }) => {
  return (
    <div>
      <img
        src={image}
        alt={caption}
        style={{ height: '600px', width: '100%', objectFit: 'cover' }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) =>
            theme.palette.secondary.contrastText || 'common.white',
          width: '100%',
          padding: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">
          Browse and shop for your favorite trading cards. Whether buying or
          selling, we&apos;ve got something for every collector!
        </Typography>
      </Box>
    </div>
  );
};

const CarouselContainer = ({ isMounted }) => {
  // if (!isMounted.current) {
  //   return;
  // }
  const classes = useStyles();
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      className={classes.carouselContainer}
    >
      {carouselImages?.map(({ image, caption }, index) => (
        <CarouselImage key={index} image={image} caption={caption} />
      ))}
    </Carousel>
  );
};

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMounted = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  return (
    <HomeBanner>
      <Container
        sx={{
          padding: 3,
          borderRadius: 2,
          backgroundColor: 'background.paper',
          boxShadow: theme.shadows[10],
        }}
        maxWidth="md"
      >
        <HeaderTitle
          title="Welcome to Our Application!"
          size="huge"
          location="center"
        />
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className={classes.carouselContainer}
        >
          {carouselImages.map(({ image, caption }, index) => (
            <CarouselImage
              key={index}
              image={image}
              caption={caption}
              classes={classes}
            />
          ))}
        </Carousel>
      </Container>
    </HomeBanner>
  );
};

export default HomePage;
