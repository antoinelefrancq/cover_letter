import Head from "next/head";
import Header from "../components/Header";
import Layout from '../components/Layout';

export default function Home() {
  const url = 'bg-index'
  const title = 'En recherche d\'alternance'

  return (
    <Layout>
      <Head>
        <title>Page d&apos;accueil</title>
      </Head>
      <Header title={title} url={url} />
      <section className="flex sm:flex-row flex-col w-[80vw] m-auto justify-between gap-2 mb-12 relative">
        <h2 className="block text-4xl leading-[70px] tracking-tight font-bold">Un alternant engagé dans son apprentissage et dans son &quot;futur&quot; métier.</h2>
        <article className="flex flex-col -mx-[8vw] sm:mx-0">
          <p className=" m-3">
            En recherche d&apos;un emploi, j&apos;ai premièrement commencé par rechercher un CDD ou CDI. 
          </p>
          <p className=" m-3">
            Ne trouvant pas d&apos;opportunités pour ce type de contrat, 
            j&apos;ai poursuivi avec la recherche de stage afin de rendre mon profil plus attrayant pour les entreprises.
          </p>
          <p className=" m-3">
            J&apos;ai été vraiment fortement attiré par Walterre et j&apos;ai donc regardé les conditions de l&apos;alternance.
          </p>
          <p className=" m-3">
            Aujourd&apos;hui, je souhaite intégrer votre entreprise au poste de développeur fullstack que vous proposez.
          </p>
        </article>
      </section >
      <section className="flex flex-col w-screen items-center py-24 bg-white">
        <h2 className="w-[70vw] block text-4xl leading-[70px] tracking-tight font-bold">Je vous invite à consulter les autres pages qui appuient ma demande.</h2>
        <article className="mt-12 sm:mx-0 mx-2">
          <p className=" m-3">L&apos;objectif de ce site web est d&apos;appuyer ma candidature auprès de vous en s&apos;inspirant du thème général de votre propre site web.</p>
          <p className=" m-3">Afin d&apos;y parvenir, j&apos;ai employé de nombreux outils, dont :</p>
          <ul className="ml-6">
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Typescript</li>
            <li>Nodemailer</li>
            <li>...</li>
          </ul>
          <p className=" m-3">Je ne pretends évidemment pas être expert dans ces technologies et toute critique du code source est bonne à prendre.</p>
          <p className=" m-3">Les principales pistes d&apos;améliorations sont notamment, le référencement, la sécurité et l&apos;utilisation de tests.</p>
        </article>
      </section>

    </Layout>
  );
}