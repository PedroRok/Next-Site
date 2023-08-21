import Image from 'next/image'
import Navbar from './navbar'

import "./globals.css";
import TWHelper from './components/TWHelper';
import Projects from './projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center min-h-screen background'>
      <Navbar/>
      <TWHelper />
      <Projects/>
    </main>
  )
}
