import { useEffect, useState } from 'react';

const breakpoints = {
  mobile: '(max-width: 639px)',  
  tablet: '(min-width: 640px) and (max-width: 1099px)', 
  desktop: '(min-width: 1100px)',
};

const useBreakpoint = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const mediaQueryList = {
      mobile: window.matchMedia(breakpoints.mobile),
      tablet: window.matchMedia(breakpoints.tablet),
      desktop: window.matchMedia(breakpoints.desktop),
    };

    const update = () => {
      setState({
        isMobile: mediaQueryList.mobile.matches,
        isTablet: mediaQueryList.tablet.matches,
        isDesktop: mediaQueryList.desktop.matches,
      });
    };

    update(); // set awal

    Object.values(mediaQueryList).forEach((mq) =>
      mq.addEventListener('change', update)
    );

    return () => {
      Object.values(mediaQueryList).forEach((mq) =>
        mq.removeEventListener('change', update)
      );
    };
  }, []);

  return state;
};

export default useBreakpoint;
