import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin, AiFillHome} from 'react-icons/ai'
import {FaEarlybirds, FaHandPeace} from 'react-icons/fa'
import {BsTerminalFill} from 'react-icons/bs'
import {SiTensorflow, SiPytorch, SiJulia} from 'react-icons/si'
import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-60'>
        <section>
          <nav className='pt-10 pb-2 flex justify-between'>
            <h1 className='text-xl font-medium'>Mohsin Shah</h1>
            <ul className='flex items-center'>
              <Link className='hover:text-cyan-500' href="#Projects">Projects</Link>
              <Link className='hover:text-cyan-500 ml-3 md:ml-5' href="#Contact">Contact</Link>
              <button className="text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1 ml-5 md:ml-8"> 
                <a href="Mohsin_Shah_Resume.pdf" download>Resume</a>
              </button>
            </ul>
          </nav>
          <hr className="h-0.5 border-t-0 bg-gray-300 opacity-100" />
          
          <div className='pb-10'>
            <p className='text-md py-4 leading-8 text-gray-800'>
            Hello, my name is Mohsin Shah. I’m a computer science and math double major at the University of Massachusetts Amherst.
            </p>
            <p className='text-md py-4 leading-8 text-gray-800'>
            Currently, I’m working on two research projects relating to AI. One is with Professor Edward A. Rietman on reservoir computers built from oscillatory neural networks. Here we study the applications and dynamics of two-dimensional lattices formed with Nv-neurons, which are units constructed from Schmitt-triggers, capacitors, and resistors. The other project is under Professor Jaime J. Dávila, relating to NLP and deep learning. Where we compare various transformer-based multimodal models such as BLIP, GIT, and our custom model built with BERT encodings, EfficientNet, and LSTMs to generate prompts given AI-generated images.
            </p>
            <p className='text-md py-4 leading-8 text-gray-800'>
            Additionally, I like running, Brazilian jiu-jitsu, and photo/video editing. 
            </p>
          </div>
        </section>

        <section id="Projects">
          <h3 className='text-3xl py-1 font-medium'>Projects</h3>
      
          <div>

          <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Sign Language AI Translator<FaHandPeace className='fill-cyan-500 ml-2'/></h3>
                <p>Sign Decoder is an AI system that translates sign language to text and speech in real time. The goal of our app is to be accessible and free, bridging the gap between signers and non-signers. Our app is going to have an intuitive and friction-less design, simply point the camera at the person signing to start translating! Our prototype was awarded &quot;Best use of an AI model&quot; by travelers.com at the Hack(h)er 413 Hackathon (2023).</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                <a href="https://signdecoder.com">signdecoder.com</a>
                </button>
              </div>
          </div>

          <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>ShareSpace: Find Roommates<AiFillHome className='fill-cyan-500 ml-2'/></h3>
                <p>I collaborated with a team of 10 to develop a full-stack web app that matches roommates based on their preferences, allowing matched users to chat and customize their profiles. The goal of this project was to create a centralized roommate finder for UMass students. I learned a lot while working on this project, especially the specifics of building and interacting with databases.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/ShareSpaceUmass/ShareSpace.git">GitHub</a>
                </button>
              </div>
            </div>


            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>AI Flappy Bird<FaEarlybirds className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object-oriented programming to make the general mechanics of Flappy Bird with Python and PyGame. While developing the game, special attention was given to simplifying the simulation of physics and collisions. Then I implemented the NEAT (NeuroEvolution of Augmenting Topologies) genetic algorithm to create intelligent, evolving birds that can play the game autonomously. As a result, the AI birds were capable of playing the game indefinitely by the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/mohsinposts/NEAT-Learning-Flappy-Bird-AI.git">GitHub</a>
                </button>
              </div>
            </div>
            

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Artificial Intelligence Research <SiJulia className='fill-cyan-500 ml-2'/></h3>
                <p>I’ve currently doing AI research under Professor Edward A. Rietman for BiNDS lab. Here we designed and studied applications and dynamics of reservoir computers built from oscillatory neural networks. More specifically we’re interested in two-dimensional lattices formed with Nv-neurons, which are units constructed from Schmitt-triggers, capacitors, and resistors.</p>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Deep Learning & NLP Research <SiPytorch className='fill-cyan-500 ml-2'/></h3>
                <p>I’m currently working with Professor Jaime J. Dávila on deep learning and NLP research. Where we compare various transformer-based multimodal models such as BLIP, GIT, and our custom model built with BERT encodings, EfficientNet, and LSTMs to generate prompts given AI-generated images.</p> 
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
