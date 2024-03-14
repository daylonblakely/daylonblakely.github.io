import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import Me from '../assets/me.jpg';

const MeImage = styled('div')(({ theme }) => ({
  width: '50%',
  height: '50vh',
  position: 'relative',
  left: 601,
  top: 300,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Me})`,
}));

const HomePage = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      const { x, y } = imageRef.current.getBoundingClientRect();
      console.log(x);
      setImagePosition({ x, y });
    }
  }, []);

  return (
    <div>
      <MeImage ref={imageRef} />
    </div>
  );
};

export default HomePage;
