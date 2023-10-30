import useGeneral from "../store/general";

const Footer = () => {
  const isMobile = useGeneral((state) => state.isMobile);

  return (
    <footer
      className={`${
        isMobile ? 'fixed' : 'absolute'
      } bottom-0 left-0 right-0 bg-gray-700 text-gray-100 text-sm py-4 opacity-75`}
    >
      <div className="container px-5 flex items-center justify-between">
        <p className="font-thin">Created by Modulus</p>
        <div className={`ml-${isMobile ? '0' : '0'}`}> {/* Use ml-auto in non-mobile view */}
          <a
            href="https://github.com/vocarista/geolingo-client"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200"
          >
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
