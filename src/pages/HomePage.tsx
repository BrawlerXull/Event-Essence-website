import { Typewriter } from 'react-simple-typewriter';
import Layout from '../components/Layout';



import Lottie from 'react-lottie-player';
function HomePage() {
  const images = [
    'https://drive.google.com/uc?id=1Pz_UBLN86aMjcmXw7a0rHNBPTWD6M5Pt',
    'https://drive.google.com/uc?id=16X4QDVC7miy_o2JDl33bnTDZkQWCKFrs',
    'https://drive.google.com/uc?id=18x4EGF6RIXExx0kfq85huj5bL9Ssl8Rm',
    'https://drive.google.com/uc?id=1Pz_UBLN86aMjcmXw7a0rHNBPTWD6M5Pt',
    'https://drive.google.com/uc?id=16X4QDVC7miy_o2JDl33bnTDZkQWCKFrs',
    'https://drive.google.com/uc?id=18x4EGF6RIXExx0kfq85huj5bL9Ssl8Rm',
  ];
  
  return (
      <Layout>
        {/* intro section */}
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-6xl mb-10 text-blue-300' style={{ fontFamily: 'Dancing Script' }}>Event Essence</h1>
          <h3 className='text-6xl text-blue-300 mb-10  text-center' style={{ fontFamily: 'Nova square' }}>Your Event Our Expertise</h3>
          <span className=' font-mono text-blue-300 mb-10'>
            <Typewriter
              words={['Light and Decors' , 'Stage Decoration' , 'Stalls and Pandals' , 'Gifting and Momentos']}
              loop={false}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              
            />
          </span>
          <div className='border-2 border-white rounded-xl p-2 hover:bg-gray-700 '>
            <button className="text-white">
              Check us out!
            </button>
          </div>
        </div>

        {/* previous work section  */}
          <div className=' flex flex-col lg:flex-row justify-center items-center min-h-screen'>
            <h3 className='text-6xl mb-10 text-blue-300  text-center' style={{ fontFamily: 'Nova square' }}>Previous Work</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 '>
              {images.map((image)=>(

                  <img src={image} alt="" className=' w-80 mx-auto rounded-xl '  height={20}  />

              ))}

            </div>
          </div>


          {/* contact section  */}
          <div className=" flex items-center flex-col md:flex-row md:justify-center min-h-screen" id="contact-section">
            <Lottie
              loop
              path='https://assets8.lottiefiles.com/packages/lf20_in4cufsz.json'
              play
              style={{ width: 450, height: 450 }}
            />
            <div className=' md:ml-20'>
              <h1 className=' md:text-8xl text-blue-300 mb-4 sm:text-4xl' style={{ fontFamily: 'Nova square' }}>Contact Us</h1>

              <div>
                <h3 className='md:text-4xl sm:text-2xl text-blue-300' style={{ fontFamily: 'Nova square' }}>name</h3>
                <input
                  type="text"
                  name="name"
                  id="name"
                  style={{
                    fontSize: '16px', 
                    borderRadius: '8px', 
                    padding: '8px', 
                    border: '1px solid #ccc', 
                    width: '300px', 
                    height: '30px',
                    marginBottom: '10px'
                  }}
                />

                <h3 className='md:text-4xl sm:text-2xl text-blue-300' style={{ fontFamily: 'Nova square' }}>phone no</h3>
                <input
                  type="text"
                  name="name"
                  id="name"
                  style={{
                    fontSize: '16px', 
                    borderRadius: '8px', 
                    padding: '8px', 
                    border: '1px solid #ccc', 
                    width: '300px', 
                    height: '30px',
                    marginBottom: '10px'
                  }}
                />

                <h3 className='md:text-4xl sm:text-2xl text-blue-300' style={{ fontFamily: 'Nova square' }}>query</h3>
                <input
                  type="text"
                  name="name"
                  id="name"
                  style={{
                    fontSize: '16px', 
                    borderRadius: '8px', 
                    padding: '8px', 
                    border: '1px solid #ccc', 
                    width: '300px', 
                    height: '30px',
                    marginBottom: '10px'
                  }}
                />
                <div className='border-2 border-white rounded-xl p-2 hover:bg-gray-700 text-center  w-40 ml-16 mt-4 '>
                <button className="text-white ">
                  Send !
                </button>
              </div>

              </div>
              
            </div>
          </div>




      </Layout>
  );
}

export default HomePage;
