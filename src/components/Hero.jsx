import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import backgroundImage from '../assets/herobg.png'; // Import the background image
import blendImage from '../assets/myImage.png'; // Import the blend image for the top right corner

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 5, 25, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Adjust background properties as needed
        backgroundPosition: 'center',
      
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-purple-500">Brandon</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a passionate Full Stack Web Developer!
            <br className="sm:block hidden" />
            Ready to be your next hire!
          </p>
        </div>
      </div>
      <div
        className="absolute ${isMobile ? 'bottom-0 left-0' : 'top-0 right-0'} w-[740px] h-[1270px]"
        style={{
          backgroundImage: `url(${blendImage})`, // Set the blend image for the top right corner
          backgroundSize: 'cover',
          backgroundPosition: 'right', // Adjust background properties as needed
          opacity: '0.3'
        }}
      ></div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;