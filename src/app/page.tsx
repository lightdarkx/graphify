'use client';
import Navbar from './components/navigation/Navbar';
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='border-2 border-red-500'>
        <div className='border-0 font-geist text-4xl mx-auto max-w-fit text-white'>
          Data Vizaualization
        </div>
        <div className='border-0 font-geist text-4xl mx-auto max-w-fit text-white'>
          Made Easy
        </div>
      </div>
    </>
  );
}
