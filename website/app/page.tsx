import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import aiFlappyBird from '../public/aiFlappyBird.png'

export default function Home() {
  return (
    
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-60'>
        <section   className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Mohsin Shah</h1>
            <ul className='flex items-center'>
              <li>About</li>
              <li className='ml-8'>Projects</li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8" href="">Resume</a></li>
            </ul>
          </nav>
          
          <div >
            <h3 className='text-5xl py-1'>Mohsin Shah</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Fresa dfakf ajfa fakfjkafksjkafja sdfhsjkfhskfjs fk s 
              <span className='text-teal-500'>computer science</span>
              sfajajfkahfkjafjhaajkfasfjkshfjkshfjskhfjshfjkshfs
              ajsfahflkjhss fkjs fjsh fksf sfhskjhfsjfhsjkhfs 
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
        </section>

        <section>
          <h3 className='text-3xl py-1'>My projects</h3>
          
          <div className='grid grid-cols1 md:grid-cols-2 gap-10' >
            <div className='group relative'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <Image className='mx-auto' src={aiFlappyBird} width={100} height={100} alt="AI Flappy Bird"/>
                <h3 className='text-lg font-medium pt-8 pb-2'>AI Flappy Bird</h3>
                <p>AI leans how to play flappy bird, very nice</p>
                <h4 className='py-2'>Tools I used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Pygame</p>
                <p className='text-gray-800 py-1'>Neat</p>
              </div>
            </div>
            <div className='bg-white/2 backdrop-blur-md text-center shadow-lg p-10 rounded-xl'>
              <Image className='mx-auto' src={aiFlappyBird} width={100} height={100} alt="AI Flappy Bird"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>AI Flappy Bird</h3>
              <p>AI leans how to play flappy bird, very nice</p>
              <h4 className='py-2'>Tools I used</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Pygame</p>
              <p className='text-gray-800 py-1'>Neat</p>
            </div>
            <div className='bg-white/2 backdrop-blur-md text-center shadow-lg p-10 rounded-xl'>
              <Image className='mx-auto' src={aiFlappyBird} width={100} height={100} alt="AI Flappy Bird"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>AI Flappy Bird</h3>
              <p>AI leans how to play flappy bird, very nice</p>
              <h4 className='py-2'>Tools I used</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Pygame</p>
              <p className='text-gray-800 py-1'>Neat</p>
            </div>
            
          </div>
          
          
        </section>
        
        
      
        
      </main>
      
    </div>
    
   
  )
}
