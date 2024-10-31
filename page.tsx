"use client";
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faBlog, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';


import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function homepage() {
  return ( 
    <div>
    <div className='flex justify-between items-center p-6 bg-gray-400 boader-4 rounded-lg m-8 '>
      <div className='boder-4 rounded-lg'>
       <header/>
       <div className='flex justify-center items-center space-x-40'>
      <nav>
        <ul className='flex space-x-16'>
          <li><a href='/home'><FontAwesomeIcon icon={faHome} className='mr-2' /> Home</a></li>
          <li><a href='/about'><FontAwesomeIcon icon={faInfoCircle} className='mr-2' /> About</a></li>
          <li><a href='/contact'><FontAwesomeIcon icon={faEnvelope} className='mr-2' /> Contact</a></li>
          <li><a href='/blog'><FontAwesomeIcon icon={faBlog} className='mr-2' /> Blog</a></li>
          <li><a href='/login'><FontAwesomeIcon icon={faUser} className='mr-2' /> Login</a></li>
          <li><a href='/resume'><FontAwesomeIcon icon={faFileAlt} className='mr-2' /> Resume</a></li>
        </ul>
      </nav>
      </div>
    </div>
      <div className='boder-4 rounded-lg text-white bg-purple-800'>
      <button type="button"
      onClick={() => console.log("clicked")}>
        Clicked
      
      </button>
      </div>
      <div className='boder-4 rounded-none text-white bg-purple-800'>
      <button type="button"
      onClick={() => console.log("clicked")}>
        search
      
      </button>
      </div>
    
      <div className='flex justify-end items-and'>
     
        <img src='/image/png.pg.jfif' alt='image' height={60} width={60} className='rounded-4xl
      object-cover '/>
      </div>
       <div>
    </div>
</div>
 <h1 className='text-center  text-4xl text-pretty  bg-orange-300 '>The Real story</h1>
 <p className='text-justify text-pretty  p-4'>
 In a small town, there lives a young woman named Zara. She works as a cashier in a grocery store by day and takes online classes at night, hoping to one day get a degree in computer science. Her family depends on her modest income, and she’s always placed others’ needs before her own dreams. Although her responsibilities are heavy, Zara carries them with a quiet strength.

Zara`s life is simple, even monotonous, and she sometimes wonders if this is all there is. She dreams of moving to a big city, finding a job in tech, and building a better life, but that dream feels far out of reach. Her friends often tell her she’s too quiet and selfless, and while she laughs it off, a small part of her wonders if they’re right. Deep down, Zara wants more, but she’s afraid of the unknown.
 </p>
 <div className='flex justify-center items-center'>
 <img src='/image/ss.jfif' alt='image' height={300} width={360} className='rounded-4xl justify-center 
      object-cover  m-10'/>
     </div> 
      <div className='flex justify-center items-center space-x-4'>
        <footer className="text-center text-gray-500">© 2024 Saniya Khan. All rights reserved.</footer>
        <h2>
        <FontAwesomeIcon icon={faFacebook} className="text-gray-500 hover:text-blue-600 cursor-pointer" />
          facebook</h2>
        <h2>
          <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-pink-600 cursor-pointer" />
          instagram</h2>
        <h2>
          <FontAwesomeIcon icon={faTwitter} className="text-gray-500 hover:text-blue-400 cursor-pointer" />
        twitter</h2>

        </div> 
    </div>

  )    
     
}
      
      
