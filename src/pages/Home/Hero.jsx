import { Link } from 'react-router-dom';
import HeroImage from '../../assets/hero.jpg';
import Stars from '../../assets/stars.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='font-poppins overflow-x-hidden'>
      {/* tailgrid components start  */}
      <div className='relative bg-[#e0e0e0] pt-[120px] pb-[110px] lg:pt-[150px]'>
        <div className='container mx-auto px-10'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full px-4 lg:w-5/12'>
              <div className='hero-content'>
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h1 className='text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]'>
                    Here you can
                    <br />
                    <span className='sm:text-8xl text-6xl'>
                      Level Up Your Business
                    </span>
                  </h1>
                  <p className='text-body-color text-sm mb-8 max-w-[480px] sm:text-base'>
                    Welcome and thank you for taking your time to take a look at
                    our solutions, wee can ensure you that wee will take your
                    Business to the next level, so hang in tight and lets Level
                    UP!
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -75 },
                  }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <ul className='flex flex-wrap items-center'>
                    <li>
                      <Link
                        to='#'
                        className='bg-blue-400 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10'
                      >
                        Get Started
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='#'
                        className='bg-blue-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-blue-200 sm:px-10 lg:px-8 xl:px-10'
                      >
                        Take a look
                      </Link>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className='pt-16 clients'
                >
                  <h6 className='text-body-color mb-2 flex items-center text-xs font-normal'>
                    Some Of Our Clients
                    <span className='bg-body-color ml-2 inline-block h-[1px] w-8'></span>
                  </h6>
                  <div className='flex items-center'>
                    <div className='mr-4 w-full py-3'>
                      <img
                        src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg'
                        alt='ayroUI'
                      />
                    </div>
                    <div className='mr-4 w-full py-3'>
                      <img
                        src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg'
                        alt='grayGrids'
                      />
                    </div>
                    <div className='mr-4 w-full py-3'>
                      <img
                        src='https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg'
                        alt='uiDeck'
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className='hidden px-4 lg:block lg:w-1/12'></div>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='lg:ml-auto lg:text-right'>
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
                    hidden: { opacity: 0, x: 75, filter: 'blur(5px)' },
                  }}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className='relative z-10 inline-block pt-11 lg:pt-0 mt-10'
                >
                  <img
                    src={HeroImage}
                    alt='hero'
                    className='max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]'
                  />
                  <img
                    src={Stars}
                    alt='stars'
                    className='z-20 w-28 absolute mt-[-105%] right-[-5%] opacity-70 hover:opacity-100'
                  />
                  <span className='absolute -left-8 -bottom-8 z-[-1]'>
                    <svg
                      width='93'
                      height='93'
                      viewBox='0 0 93 93'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='2.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='2.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='24.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='46.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='68.5' cy='90.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='2.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='24.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='46.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='68.5' r='2.5' fill='#3056D3' />
                      <circle cx='90.5' cy='90.5' r='2.5' fill='#3056D3' />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tailgrid components end  */}
    </div>
  );
};

export default Hero;
