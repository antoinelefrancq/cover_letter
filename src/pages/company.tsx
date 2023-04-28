import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Company() {
  const title="Ce que j'ai pu retenir de Walterre"
  const url ="bg-company"
  return (
    <Layout>
      <Head>
        <title>L&apos;entreprise</title>
      </Head>
      <Header title={title} url={url} />
      <section className="relative flex flex-row w-[80vw] m-auto justify-between gap-2 mb-12">
        <article className='flex flex-col'>
          <h2 className="text-4xl leading-[70px] tracking-tight font-bold">Une entreprise en faveur de l&apos;humain.</h2>
          <p className='m-3'>Créée en 2019, Walterre est une jeune entreprise constituée d&apos;une équipe de 15 collaborateurs. Basée à Lyon, le but est de se développer au niveau national.</p>
          <p className='m-3'>Au sein de l&apos;entreprise, les valeurs promues sont la <strong>confiance</strong> et le partage, dans le <strong>respect</strong> et la <strong>bienveillance</strong>.</p>
          <p className='m-3'>Ce sont ces valeurs qui vont permettre à chacun de s&apos;impliquer au sein de Walterre.</p>
        </article>
        <div className='relative w-2/3 min-w-[400px]  min-h-[400px]'>
          <Image 
          priority
          src="/images/friends_together.png"
          className='hello'
          fill
          style={{objectFit:"cover"}}
          alt='Image d&apos;amis heureux d&apos;être ensemble'/>
        </div>
      </section >
      <section className="flex flex-col w-screen items-center py-24 bg-white">
        <h2 className="w-[70vw] block text-4xl leading-[70px] tracking-tight font-bold text-center">Une entreprise engagée pour l&apos;environnement et dans la transition energétique.</h2>
        <article className="mt-16">
          <p className=" m-3">Walterre est une entreprise spécialisée dans les systèmes de chauffage qui apporte autant une expertise technique que technologique.</p>
          <p className=" m-3">L&apos;entreprise propose tant un diagnostic qu&apos;un suivi des installations.</p>
          <p className=" m-3">Les interventions peuvent s&apos;effectuer sur toutes les installations de chauffage collectif. Les clients peuvent être tant les bailleurs, que les syndicats, les copropriétaires...</p>
        </article>
      </section>
    </Layout>
  )
}