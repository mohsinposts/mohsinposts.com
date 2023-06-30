import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin, AiFillHome} from 'react-icons/ai'
import {FaEarlybirds, FaHandPeace} from 'react-icons/fa'
import {BsTerminalFill} from 'react-icons/bs'
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
          <h3 className='text-3xl py-1 font-medium'>Projects</h3>
          
          <div>
          <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>ShareSpace: Find Roommates<AiFillHome className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object oriented programming to make the general mechanics of the game with Python and PyGame. Whilst making the game I tried to think of the simplest ways to simulate physics and collisions. Then I implemented the NEAT genetic algorithm with evolving artificial neural networks to trian the AI birds. When I tested the AI, the birds were could go on forever after the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/ShareSpaceUmass/ShareSpace.git">GitHub</a>
                </button>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Sign Language AI Translator<FaHandPeace className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object oriented programming to make the general mechanics of the game with Python and PyGame. Whilst making the game I tried to think of the simplest ways to simulate physics and collisions. Then I implemented the NEAT genetic algorithm with evolving artificial neural networks to trian the AI birds. When I tested the AI, the birds were could go on forever after the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/poojappatel/Artificial-Sign-Language-ASL-.git">GitHub</a>
                </button>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>AI Flappy Bird<FaEarlybirds className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object oriented programming to make the general mechanics of the game with Python and PyGame. Whilst making the game I tried to think of the simplest ways to simulate physics and collisions. Then I implemented the NEAT genetic algorithm with evolving artificial neural networks to trian the AI birds. When I tested the AI, the birds were could go on forever after the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/mohsinposts/NEAT-Learning-Flappy-Bird-AI.git">GitHub</a>
                </button>
              </div>
            </div>
            
            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Terminal Based Board Game<BsTerminalFill className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object oriented programming to make the general mechanics of the game with Python and PyGame. Whilst making the game I tried to think of the simplest ways to simulate physics and collisions. Then I implemented the NEAT genetic algorithm with evolving artificial neural networks to trian the AI birds. When I tested the AI, the birds were could go on forever after the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/mohsinposts/terminal-based-board-game.git">GitHub</a>
                </button>
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
