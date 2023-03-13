import React from 'react'
import ComputerCanvas from "./Computers" 
import { motion } from "framer-motion";

function Land() {
  const variantimage1 = {
    hidden: {
        
        scale: 1,
        x: "100vw",
      y:"-1",
    },
    visible: {
       
        scale: 1,
        x: 0,
        y: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        duration: 3,
      },
    },
    exit: {
        rotate: 90,
        scale: 1,
        x: "22vw",
        y: "120vh",
        transition: {
          type: "spring",
          stiffness: 30,
          duration: 1,
        },
      },
  };

  return (
    <div className='w-full' >
      <div className='flex flex-row h-screen w-full mx-auto px-20'  >
              <div className='text-black ml-20 mt-20 basis-1/2 '>
                      <motion.div 
                              initial="hidden" // use variants to define initial and animate properties
                              animate="visible"
                              variants={variantimage1}>  
                              
                         
                          <h1 className='text-8xl font-bold'style={{ fontFamily: 'Source Sans Pro' }} >Apple Watch</h1>
                           <h1 className='text-5xl font-bold  ' style={{ fontFamily: 'Source Sans Pro' }}>Solar-Powered</h1>
                        <p className='text-gray-700 mt-6' style={{ fontFamily: 'Source Sans Pro' }} >With a sleek and stylish design, the Solar-Powered Apple Watch not only looks great on your wrist, but it also helps you stay connected and productive throughout the day.</p>
                        </motion.div> 
                  </div>
                  <div className='-mt-28 w-full h-screen basis-1/2 text-black fixed mr-0 ml-56'>
                  <ComputerCanvas/>
               </div>
      </div>
      <div className='h-screen w-full flex justify-content align-center' >
        <div className='flex justify-content align-center' >
           <h1 className='text-8xl font-normal text-black  -rotate-90 font-bold ml-40  mt-32 opacity-20' style={{ fontFamily: 'Source Sans Pro' }} >APPLE WATCH</h1>
           <div className='flex flex-col' >
           <h1 className='text-2xl font-normal text-black    mt-32' style={{ fontFamily: 'Source Sans Pro' }} >light as a source of power</h1>
           <div className=' mt-72 ml-20'>
           <svg width="61" height="35" viewBox="0 0 61 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.4C9 8.84771 9.44772 8.39999 10 8.39999H12C12.5523 8.39999 13 8.84771 13 9.39999V26C13 26.5523 12.5523 27 12 27H10C9.44772 27 9 26.5523 9 26V9.4ZM17 9.4C17 8.84771 17.4477 8.39999 18 8.39999H20C20.5523 8.39999 21 8.84771 21 9.39999V26C21 26.5523 20.5523 27 20 27H18C17.4477 27 17 26.5523 17 26V9.4ZM25 9.4C25 8.84771 25.4477 8.39999 26 8.39999H28C28.5523 8.39999 29 8.84771 29 9.39999V26C29 26.5523 28.5523 27 28 27H26C25.4477 27 25 26.5523 25 26V9.4ZM33 9.4C33 8.84771 33.4477 8.39999 34 8.39999H36C36.5523 8.39999 37 8.84771 37 9.39999V26C37 26.5523 36.5523 27 36 27H34C33.4477 27 33 26.5523 33 26V9.4ZM41 9.4C41 8.84771 41.4477 8.39999 42 8.39999H44C44.5523 8.39999 45 8.84771 45 9.39999V26C45 26.5523 44.5523 27 44 27H42C41.4477 27 41 26.5523 41 26V9.4Z" fill="#D3D3D3"/>
<path d="M53 10.4V3.34875C52.9922 2.5602 52.6721 1.80692 52.1097 1.25413C51.5473 0.701336 50.7886 0.394169 50 0.399999H3.99825C3.20968 0.394169 2.451 0.701336 1.8886 1.25413C1.3262 1.80692 1.00601 2.5602 0.99825 3.34875V32.0512C1.00601 32.8398 1.3262 33.5931 1.8886 34.1459C2.451 34.6987 3.20968 35.0058 3.99825 35H50C50.7886 35.0058 51.5473 34.6987 52.1097 34.1459C52.6721 33.5931 52.9922 32.8398 53 32.0512V25H60C60.5523 25 61 24.5523 61 24V11.4C61 10.8477 60.5523 10.4 60 10.4H53ZM57 20C57 20.5523 56.5523 21 56 21H50C49.4477 21 49 21.4477 49 22V30C49 30.5523 48.5523 31 48 31H5.99825C5.44597 31 4.99825 30.5523 4.99825 30V5.4C4.99825 4.84771 5.44597 4.4 5.99825 4.4H48C48.5523 4.4 49 4.84771 49 5.4V13.4C49 13.9523 49.4477 14.4 50 14.4H56C56.5523 14.4 57 14.8477 57 15.4V20Z" fill="black"/>
</svg>
             
             </div> 
           

           <h1 className='text-base font-normal text-black  px-72   mt-20' style={{ fontFamily: 'Source Sans Pro' }} >The Apple Watch Solar technology allows the device to charge using the power of the sun, making it an eco-friendly and sustainable alternative to traditional charging methods. </h1>
           </div>
        </div>
      
      </div>
      </div>
  )
}

export default Land