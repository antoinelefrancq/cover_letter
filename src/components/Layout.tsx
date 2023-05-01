import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

export default function Layout ({ children }:{children:ReactNode}) {
  const router = useRouter()
  const [menuVisible,setMenuVisible]=useState<boolean>(false);
 
  useEffect(()=>{
     window.addEventListener('scroll', handleScroll);
  })

  const handleScroll = ():void => {
    if(window.scrollY > window.innerHeight/3) {
      setMenuVisible(false);
    }
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.svg" />
        <meta
          name="description"
          content="Un site fictif pour postuler en alternance auprès de Walterre"
        />
        <meta name="og:title" content="Lettre de motivation pour une alternance chez Walterre - Antoine Lefrancq"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <header className='flex flex-row py-[1%] px-[3%] h-32 items-center w-screen'>
        <div className='w-1/6 sm:text-3xl text-xl font-semibold text-white'>
          <Link href="/" >
            <h1 className='before:block before:absolute before:bg-w-orange before:top-0 before:right-0 before:w-1/2 before:h-1 before:ease-in-out before:duration-300 sm:hover:before:-translate-x-16 relative inline-block p-1 after:block after:absolute after:bg-w-blue after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:ease-in-out after:duration-300 sm:hover:after:translate-x-16'>Antoine</h1>   
          </Link>
        </div>
        
        <nav className='relative w-2/3 flex flex-row justify-center'>
          <button className='sm:hidden border-0 bg-transparent h-8 w-12 mr-6 p-0 flex flex-col justify-between' 
          onClick={()=>setMenuVisible(!menuVisible)}>
            <div className={(menuVisible ? 'origin-center translate-y-[14px] -rotate-45 bg-w-orange ' : ' bg-white ') +'block w-full h-1  duration-500'}></div>
            <div className={(menuVisible ? 'opacity-0 ' : '') +' block w-full h-1 bg-white duration-500'}></div>
            <div className={(menuVisible ? 'origin-center -translate-y-[13px] rotate-45 bg-w-orange ' : ' bg-white ') +'block w-full h-1  duration-500'}></div>
          </button>
          <ul className={(menuVisible ? '' : ' scale-0 sm:scale-100 ')+' sm:relative absolute top-12 sm:top-2 sm:flex flex-col sm:flex-row text-[13px] tracking-[2.5px] font-bold uppercase text-white duration-500 bg-w-dark-blue sm:bg-transparent z-10'}>
            <li>
              <Link href="/" >
                <p className={(router.pathname === '/' ? 'before:bg-w-orange ' : '') + 'px-5 py-5 relative before:block before:absolute hover:before:bg-w-orange before:bottom-0 before:right-1/2 before:translate-x-1/2 before:w-10/12  before:h-1 before:ease-in before:duration-300'}>L&apos;alternance</p>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <p className={(router.pathname === '/company' ? 'before:bg-w-orange ' : '') + 'px-5 py-5 relative before:block before:absolute hover:before:bg-w-orange before:bottom-0 before:right-1/2 before:translate-x-1/2 before:w-10/12 before:h-1 before:ease-in before:duration-300'}>Walterre</p>
              </Link>
            </li>
            <li>
              <Link href="/me">
                <p className={(router.pathname === '/me' ? 'before:bg-w-orange ' : '') + 'px-5 py-5 relative before:block before:absolute hover:before:bg-w-orange before:bottom-0 before:right-1/2 before:translate-x-1/2 before:w-10/12 before:h-1 before:ease-in before:duration-300'}>À propos de moi</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className={(router.pathname === '/contact' ? 'before:bg-w-orange ' : '') + 'px-5 py-5 relative before:block before:absolute hover:before:bg-w-orange before:bottom-0 before:right-1/2 before:translate-x-1/2 before:w-10/12 before:h-1 before:ease-in before:duration-300'}>Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button 
        className='px-6 py-2 font-medium uppercase text-xs bg-w-orange text-white ease-in duration-300 hover:text-black' 
        onClick={()=>{window.open('/Antoine_Lefrancq _CV.pdf', '_blank')}}
        >mon cv</button>
      </header>
      <main>{children}</main>
      <footer className=' bg-w-dark-blue min-h-72 w-screen flex sm:flex-row flex-col sm:justify-center items-center py-16 gap-10'>
        <section className='flex flex-col items-center sm:items-end w-[25vw] gap-5'>
          <div className='text-3xl font-semibold text-white'>
            <Link href="/" >
              <h1 className='before:block before:absolute before:bg-w-orange before:top-0 before:right-0 before:w-1/2 before:h-1 before:ease-in-out before:duration-300 sm:hover:before:-translate-x-16 relative inline-block p-1 after:block after:absolute after:bg-w-blue after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:ease-in-out after:duration-300 sm:hover:after:translate-x-16'>Antoine</h1>   
            </Link>
          </div>
          <div className='flex flex-row justify-center gap-5'><Link href="https://www.linkedin.com/in/antoine-lefrancq/" className='bg-white rounded-md ease-in duration-150 hover:bg-[rgba(255,255,255,0.81)]'>
            <Image 
                priority
                src="/images/linkedin.png"
                className='p-3'
                height={45}
                width={45}
                alt='link to my LinkedIn profile'/>
          </Link>
          <Link href='https://github.com/antoinelefrancq' className='bg-white rounded-md ease-in duration-150 hover:bg-[rgba(255,255,255,0.81)]'>
            <Image 
                priority
                src="/images/github-mark.svg"
                className=' p-3'
                height={45}
                width={45}
                alt='link to my Github profile'/>
          </Link></div>
          
        </section>
        <section className='flex flex-col items-center sm:items-start sm:w-[25vw] gap-3'>
          <h2 className='text-w-light-orange text-lg font-medium'>+590 (0)690 23 26 33</h2>
          <button className='text-[rgba(255,255,255,0.8)] text-sm hover:text-[rgba(255,255,255,0.6)]' onClick={()=>{window.open('mailto:antoinelefrancq.pro@gmail.com')}}>antoinelefrancq.pro@gmail.com</button>
          <p className='text-[rgba(255,255,255,0.8)] text-sm'>Le Moule (97160)</p>
          <p className='text-[rgba(255,255,255,0.8)] text-sm'>Guadeloupe</p>
        </section>
      </footer>
    </>
  );
}