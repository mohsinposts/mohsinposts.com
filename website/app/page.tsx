import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin, AiFillHome} from 'react-icons/ai'
import {FaEarlybirds, FaHandPeace} from 'react-icons/fa'
import {BsTerminalFill} from 'react-icons/bs'
import {SiTensorflow, SiPytorch, SiJulia, SiPython, SiYoutube} from 'react-icons/si'
import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-60'>
        <section>
          <nav className='pt-10 pb-2 flex justify-between'>
            <h1 className='text-xl font-medium'>Mohsin Shah</h1>
            <ul className='flex items-center'>
              <Link className='hover:text-cyan-500' href="#Experience">Experience</Link>
              <Link className='hover:text-cyan-500 ml-3 md:ml-5' href="#Projects">Projects</Link>
              <Link className='hover:text-cyan-500 ml-3 md:ml-5' href="#Contact">Contact</Link>
              <button className="text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1 ml-5 md:ml-8"> 
                <a href="Mohsin_Shah_Resume.pdf" target="_blank">Resume </a>
              </button>
            </ul>
          </nav>
          <hr className="h-0.5 border-t-0 bg-gray-300 opacity-100" />
          
          <div className='pb-10'>
            <p className='text-base py-4 leading-8 text-gray-800'>
            Hello, my name is Mohsin Shah. I’m a computer science and math double major at the University of Massachusetts Amherst.
            </p>
            <p className='text-base py-4 leading-8 text-gray-800'>
            I'm particularly interested in AI/ML, especially in natural language processing and multimodal models. My focus has been on developing systems that generate prompts or captions from AI-generated images. At Microsoft, I implemented customizable benchmarking metrics, error analysis modules, and LIME explainers for LLMs. Currently, I'm focused on learning about optimized models for tabular data analysis.
            </p>
            <p className='text-base py-4 leading-8 text-gray-800'>
            Additionally, I like running, Brazilian jiu-jitsu, and photo/video editing. 
            </p>
          </div>
        </section>

        <section id="Experience">
          <h3 className='text-3xl mb-10 py-1 font-medium'>Experience</h3>
          <ol className="relative border-s ml-2 border-cyan-500">             
              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 -start-4">
                      <img src = "Fidelity.svg" alt="Fidelity Investments logo"/>
                  </span>
                  <h3 className="mb-1 font-medium text-xl">Fidelity Investments</h3>
                  <h4 className="mb-1 font-medium text-base">Data Engineering Intern</h4>
                  <time className="block mb-4 text-sm font-normal leading-none text-gray-800">June 2024 – Aug 2024</time>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Created chatbot for single sign-on service with Amazon Lex, tracked via Jira; aiding efficiency and projected to reduce inquiries by 40%.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Designed Splunk dashboards for Password Resets & User Registration, identifying friction and abandonment points for millions of users.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Applied Snowflake SQL tables & AWS S3 to migrate client-facing cybersecurity data, raising data security for 5000+ annual presentations.</p>
              </li>     
              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 -start-3">
                      <img src = "Microsoft.svg" alt="Microsoft logo"/>
                  </span>
                  <h3 className="mb-1 font-medium text-xl">Microsoft</h3>
                  <h4 className="mb-1 font-medium text-base">Data Science Intern</h4>
                  <time className="block mb-4 text-sm font-normal leading-none text-gray-800">Jan 2024 – Feb 2024</time>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Extended Azure ML’s Responsible AI Toolbox & Interpret Text for LLMs like GPT-4 & Llama, aiding 200,000+ users in model evaluation.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Implemented LIME explainers, customizable benchmarking metrics, and error analysis modules in the comprehensive UI dashboard.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Developed 5 tutorial notebooks showcasing model analysis with HuggingFace (GPT-Neo, RoBERTa) and OpenAI API (GPT-4, 3.5, 3).</p>  
              </li>

              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-9 h-9 -start-5">
                      <img src = "UMass.svg" alt="Fidelity Investments logo"/>
                  </span>
                  <h3 className="mb-1 font-medium text-xl">University of Massachusetts Amherst</h3>
                  <h4 className="mb-1 font-medium text-base">ML & NLP Research Intern</h4>
                  <time className="block mb-4 text-sm font-normal leading-none text-gray-800">May 2023 – Sep 2023</time>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Analyzed multimodal transformer models: BLIP, GIT, CLIP, and custom vision language model (VLM) with BERT (LLM) encodings,
  EfficientNet (CNN), and LSTMs with PyTorch (CUDA) to generate prompts of AI generated images, achieving a BLEU score of 68%.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Created training and validation datasets for R&D using Python & Selenium, web scraping 1000+ AI generated images and prompts.</p>
              </li>     

              <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-7 h-7 -start-3.5">
                      <img src = "Binds.svg" alt="Biologically Inspired Neural and Dynamical Systems Lab logo"/>
                  </span>
                  <h3 className="mb-1 font-medium text-xl">Biologically Inspired Neural and Dynamical Systems Lab</h3>
                  <h4 className="mb-1 font-medium text-base">AI & RNN Research Intern</h4>
                  <time className="block mb-4 text-sm font-normal leading-none text-gray-800">Feb 2023 – Dec 2023</time>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Built simulations in Julia to study the applications and dynamics of oscillatory neural networks; made computation 10x faster.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Designed algorithms to solve the ongoing challenge of recurrent neural network oversaturation; potentially applicable in robotics.</p>
                  <p className="text-sm mb-1 font-normal text-gray-800">• Enhanced data visualization with 1000+ raster plots and video heatmaps, integrating clustering algorithms for data segmentation.</p>  

              </li>     
              
          </ol>
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
                <a href="https://signdecoder.com" target="_blank" rel="noopener noreferrer">signdecoder.com</a>
                </button>
              </div>
          </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>eBay: ML & NER Competition<SiPython className='fill-cyan-500 ml-2'/></h3>
                <p>We Developed a 94% accurate name entity recognition (NER) model using 10 million raw eBay listings in German; effectively classifying each word. To do this we analyzed and preprocessed the raw, non-english dataset with Pandas; streamlining feature extraction and performance. Ultimately we achieved our goal of enhancing the data quality and searchability of the eBay listings.</p>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>ShareSpace: Find Roommates<AiFillHome className='fill-cyan-500 ml-2'/></h3>
                <p>I collaborated with a team of 10 to develop a full-stack web app that matches roommates based on their preferences, allowing matched users to chat and customize their profiles. The goal of this project was to create a centralized roommate finder for UMass students. I learned a lot while working on this project, especially the specifics of building and interacting with databases.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/ShareSpaceUmass/ShareSpace.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                </button>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>Automated Video Content Creation App<SiYoutube className='fill-cyan-500 ml-2'/></h3>
                <p>We developed an app that allows users to create social media videos by selecting book segments and narrator voices. This project automated the entire video creation process, including syncing background clips and on-screen text. As a result, we currently have over 5,000 followers.</p>
              </div>
            </div>

            <div className='group relative my-10'>
              <div className='invisible group-hover:visible absolute -inset-0.5 bg-gradient-to-br  from-cyan-100 to-teal-500 rounded-lg blur-md opacity-75'></div>
              <div className='relative bg-white text-center shadow-lg p-10 rounded-xl'>
                <h3 className='text-2xl font-medium pt-5 pb-2 flex items-center justify-center'>AI Flappy Bird<FaEarlybirds className='fill-cyan-500 ml-2'/></h3>
                <p>I made this Flappy Bird AI by first applying object-oriented programming to make the general mechanics of Flappy Bird with Python and PyGame. While developing the game, special attention was given to simplifying the simulation of physics and collisions. Then I implemented the NEAT (NeuroEvolution of Augmenting Topologies) genetic algorithm to create intelligent, evolving birds that can play the game autonomously. As a result, the AI birds were capable of playing the game indefinitely by the 11th generation.</p>
                <button className="mt-3 mb-5 text-cyan-500 outline outline-2 outline-cyan-500 hover:bg-cyan-500 hover:text-white rounded px-4 py-1">
                  <a href="https://github.com/mohsinposts/NEAT-Learning-Flappy-Bird-AI.git" target="_blank" rel="noopener noreferrer">GitHub</a>
                </button>
              </div>
            </div>

          </div>         
        </section>
        
        <section id="Contact">
        <hr className="mt-20 h-0.5 border-t-0 bg-gray-300 opacity-100" />
          <div className= 'py-10 text-5xl flex items-center justify-center align-items-center gap-16 text-gray-600'>
            <p className='text-sm md:text-lg '>mohsinposts@gmail.com</p>
            <a href="https://github.com/mohsinposts" target="_blank" rel="noopener noreferrer"><AiFillGithub className='hover:fill-cyan-500'/></a>
            <a href="https://www.linkedin.com/in/mohsinposts/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='hover:fill-cyan-500'/></a>
            
          </div>
        </section>
        
        
      
        
      </main>
      
    </div>
    
   
  )
}
