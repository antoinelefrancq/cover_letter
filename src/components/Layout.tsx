import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export default function Layout ({ children }:{children:ReactNode}) {
  const router = useRouter()
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.svg" />
        <meta
          name="description"
          content="Un site fictif pour postuler en alternance auprès de Walterre"
        />
        <meta name="og:title" content="Lettre de motivation pour une alternance chez Walterre - Antoine Lefrancq"/>
      </Head>
      <header className='flex flex-row py-[1%] px-[3%] h-32 items-center'>
        <div className='w-1/6 text-3xl font-semibold text-white'>
          <Link href="/" >
            <h1 className='before:block before:absolute before:bg-w-orange before:top-0 before:right-0 before:w-1/2 before:h-1 before:ease-in-out before:duration-300 hover:before:-translate-x-16 relative inline-block p-1 after:block after:absolute after:bg-w-blue after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:ease-in-out after:duration-300 hover:after:translate-x-16'>Antoine</h1>   
          </Link>
        </div>
        
        <nav className='w-2/3 flex flex-row justify-center'>
          <ul className='flex flex-row text-[13px] tracking-[2.5px] font-bold uppercase text-white bg-[rgba(0,0,0,0)]'>
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
      <footer className=' bg-w-dark-blue h-72 w-screen flex flex-row justify-center py-16'>
        <section className='flex flex-col items-center w-[25vw] gap-5'>
          <div className='text-3xl font-semibold text-white'>
            <Link href="/" >
              <h1 className='before:block before:absolute before:bg-w-orange before:top-0 before:right-0 before:w-1/2 before:h-1 before:ease-in-out before:duration-300 hover:before:-translate-x-16 relative inline-block p-1 after:block after:absolute after:bg-w-blue after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:ease-in-out after:duration-300 hover:after:translate-x-16'>Antoine</h1>   
            </Link>
          </div>
          <Link href="https://www.linkedin.com/in/antoine-lefrancq/" className='bg-white rounded-md ease-in duration-150 hover:bg-[rgba(255,255,255,0.81)]'>
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
          </Link>
        </section>
        <section className='flex flex-col items-start w-[25vw] gap-3'>
          <h2 className='text-w-light-orange text-lg font-medium'>+590 (0)690 23 26 33</h2>
          <button className='text-[rgba(255,255,255,0.8)] text-sm hover:text-[rgba(255,255,255,0.6)]' onClick={()=>{window.open('mailto:antoinelefrancq.pro@gmail.com')}}>antoinelefrancq.pro@gmail.com</button>
          <p className='text-[rgba(255,255,255,0.8)] text-sm'>Le Moule - 97160 (Guadeloupe) </p>
        </section>
      </footer>
    </>
  );
}