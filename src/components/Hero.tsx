import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
            Offer better services to enale businesses focus on more important problems 
          </h1>
          <p className='max-w-sm text-center text-black md:text-left'>
            Folio makes it simple for SMEs to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='#'
              className='p-3 px-6 pt-2 text-white bg-blue-700 rounded-full baseline hover:bg-blue-900'
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
