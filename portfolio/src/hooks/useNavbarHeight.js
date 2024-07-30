import { useState, useEffect } from 'react';

const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return navbarHeight;
};

export default useNavbarHeight;
