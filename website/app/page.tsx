import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {FaEarlybirds} from 'react-icons/fa'
import aiFlappyBird from '../public/aiFlappyBird.png'
import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-60'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-medium'>Mohsin Shah</h1>
            <ul className='flex items-center'>
              <Link className='hover:text-cyan-500' href="#Projects">Projects</Link>
              <Link className='hover:text-cyan-500 ml-3 md:ml-5' href="#Contact">Contact</Link>
              <button className="text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1 ml-5 md:ml-8"> 
                <a href="https://docs.google.com/document/d/1UkHw_OGfTAIOippWMRZ8ueetDf6WsEvjq8Drb2Z8obw/edit?usp=sharing">Resume</a>
              </button>
            </ul>
          </nav>
          
          <div >
            <p className='text-md py-5 leading-8 text-gray-800'>
              Fresa dfakf ajfa fakfjkafksjkafja sdfhsjkfhskfjs fk s 
              <span className='text-cyan-500'>computer science</span>
              sfajajfkahfkjafjhaajkfasfjkshfjkshfjskhfjshfjkshfs
              ajsfahflkjhss fkjs fjsh fksf sfhskjhfsjfhsjkhfs 
            </p>
          </div>
        </section>

        <section id="Projects">
          <h3 className='text-3xl py-1'>Projects</h3>
          
          <div className='grid grid-cols1 md:grid-cols-2 gap-10' >
            <div className='group relative'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-3xl font-medium pt-8 pb-2 flex items-center justify-center'>AI Flappy Bird<FaEarlybirds className='fill-cyan-500 inline '/></h3>
                <p>AI leans how to play flappy bird, very nice</p>
                <p className='text-gray-800 py-1'>Python, Pygame, NEAT</p>
              </div>
            </div>
            
            <div className='group relative'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <Image className='mx-auto' src={aiFlappyBird} width={100} height={100} alt="AI Flappy Bird"/>
                <h3 className='text-lg font-medium pt-8 pb-2'>AI Flappy Bird</h3>
                <p>AI leans how to play flappy bird, very nice</p>
                <p className='text-gray-800 py-1'>Python, Pygame, NEAT</p>
              </div>
            </div>
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
            
          </div>
          
          
        </section>
        
        <section id="Contact">
        <hr className="mt-20 h-0.5 border-t-0 bg-gray-300 opacity-100" />
          <div className= 'py-10 text-5xl flex items-center justify-center align-items-center gap-16 text-gray-600'>
            <p className='text-sm md:text-lg '>mohsinposts@gmail.com</p>
            <a href="https://github.com/mohsinposts"><AiFillGithub className='hover:fill-cyan-500'/></a>
            <a href="https://www.linkedin.com/in/mohsinposts/"><AiFillLinkedin className='hover:fill-cyan-500'/></a>
            
          </div>
        </section>
        
        
      
        
      </main>
      
    </div>
    
   
  )
}
