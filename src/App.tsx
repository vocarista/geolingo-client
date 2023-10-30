import { useEffect } from 'react'
import useGeneral from './store/general';
import Search from './components/Search';
import Bg from './assets/bg.jpg'
import Footer from './components/Footer';

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
  };
  const setIsMobile = useGeneral((state) => state.setIsMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) setIsMobile(false);
      else setIsMobile(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  return (
    <div style = {backgroundImageStyle} className = {`h-screen w-screen`}>
      <Search />
      <Footer />
    </div>
  );
}

export default App;
