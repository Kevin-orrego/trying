import React from 'react';

export default function useMobile() {

  const [isMobile, setMobileBool] = React.useState(false);

  const updateDimensions = () => {
    setMobileBool(window.innerWidth < 1024);
  };

  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  return isMobile
}