import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Me() {
const title = 'Mon profil'
const url = 'bg-me'
  return (
    <Layout>
       <Head>
        <title>L&apos;alternant</title>
      </Head>
      <Header title={title} url={url} />
      <section className="relative flex sm:flex-row flex-col w-[80vw] m-auto justify-between gap-2 mb-12 ">
        <article className='flex flex-col'>
          <h2 className="text-4xl leading-[70px] text-center tracking-tight font-bold">Antoine Lefrancq</h2>
          <h2 className="text-4xl leading-[70px] text-center tracking-tight font-bold">Développeur Web et Web Mobile Fullstack</h2>
          
          <p className='sm:m-3 my-3'>Depuis ma certification du titre en décembre 2022, j&apos;ai continué de me former afin d&apos;acquérir de nouvelles compétences et d&apos;en renforcer d&apos;autres.</p>
          <p className='sm:m-3 my-3'>J&apos;ai appris le développement web en suivant la formation de développeur fullstack JavaScript de l&apos;<Link href={"https://oclock.io/formations/developpeur-web-fullstack-javascript"} className=' text-w-blue font-semibold hover:underline'>école O&apos;clock</Link>.</p>
          <p className='sm:m-3 my-3'>Mais j&apos;avais déjà codé en C++ au lycée et j&apos;ai pu entrainer ma logique et mes capacités en algorithmie pendant mes études supérieures d&apos;enseignant en mathématiques.</p>
        </article>
        <div className='relative sm:w-2/3 w-full sm:min-w-[400px] min-h-[450px] self-start'>
          <Image
          priority
          src="/images/antoine.png"
          className='sm:object-contain object-cover '
          fill
          alt='Photo d&apos;Antoine' />
        </div>
      </section >
      <section className="flex flex-col w-screen items-center sm:py-24 py-8 bg-white">
        <h2 className="w-[70vw] block text-4xl leading-[70px] tracking-tight font-bold text-center">Qui suis-je ?</h2>
        <article className="mt-16">
          <p className=" m-3">Ma passion est la plongée sous-marine. J&apos;aime pratiquer le badminton, l&apos;escalade et aller la musculation. Je danse régulièrement la salsa et la bachata.</p>
          <p className=" m-3">L&apos;été, je participe à des reconstitutions historique avec une troupe médiévale.</p>
          <p className='m-3'>Mes principaux atouts sont l&apos;autonomie, la curiosité, la perspicacité ​​​et la logique. Je suis efficace en travail d&apos;équipe et j&apos;ai l&apos;esprit critique et auto-critique.</p>
          <p className='m-3'>Mes points à améliorer sont la prise de décision et la structure de mon code. Je dois également approfondir mes connaissances en référencement, en sécurité et dans la réalisation de tests.</p>
        </article>
      </section>
      <section className="flex flex-col w-[80vw] items-center sm:py-24 py-8 mx-auto">
        <h2 className="w-[70vw] block text-4xl leading-[70px] tracking-tight font-bold text-center">Du côté technique :</h2>
        <article className="mt-16">
          <p className=" m-3">Je pense être performant en JavaScript, React et Node.js avec le framework Express, ainsi qu&apos;avec la base de données PostgresSQL. Toutefois, j&apos;ai déjà utilisé Typescript, Sass et Tailwind et Redux en front-end. J&apos;ai pu travailler avec des api GraphQL et avec la base de données MongoDB. La dernière technologie à laquelle je m&apos;initie est Next.js. Je suis à l&apos;aise avec l&apos;utilisation d&apos;IA telles que ChatGPT et Midjourney.</p>
        </article>
        <h3 className='mt-12 font-semibold text-base'>Je vous invite à me contacter pour échanger plus amplement. Mes coordonnées sont disponibles ci-dessous.</h3>
        <svg width="50" height="50" className='arrow'>
          <path d="M5 15 L25 35 L45 15 L40 15 L25 30 L10 15 L5 15 Z" fill="#0F1B5C" />
        </svg>
      </section>
     
    </Layout>
  )
}