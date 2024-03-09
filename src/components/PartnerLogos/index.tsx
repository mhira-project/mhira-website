import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './PartnerLogos.module.css';

const partnerLogos = [
  { src: '/img/partner-logos/Fondation-Botnar.webp', url: 'https://www.fondationbotnar.org/' },
  { src: '/img/partner-logos/Hasan2.webp', url: 'https://www.uni-pr.edu/' },
  { src: '/img/partner-logos/MIDAP2.webp', url: 'https://midap.org/' },
  { src: '/img/partner-logos/University-of-Basel2.webp', url: 'https://www.unibas.ch/en.html' },
  { src: '/img/partner-logos/MUHAS.webp', url: 'https://www.muhas.ac.tz/' }
  // Add the rest of your logos with URLs here
];

const PartnerLogos: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true} containerClass={styles.carouselContainer}>
      {partnerLogos.map((item, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.src}
              alt={`Partner Logo ${index + 1}`}
              style={item.src.includes('Fondation-Botnar.webp') ? { marginTop: '60px', height: '70px', width: 'auto' } : { height: '200px', width: 'auto' }}
            />
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default PartnerLogos;

