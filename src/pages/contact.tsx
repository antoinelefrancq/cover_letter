import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Loader from '@/components/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Veuillez saisir votre nom.'),
  email: yup
    .string()
    .email('Veuillez saisir une adresse email valide.')
    .required('Veuillez saisir votre adresse email.'),
  message: yup.string().required('Veuillez saisir votre message.'),
});

interface FormData {
  name: string;
  email: string;
  message: string;
  }

export default function Contact() {
  const url='bg-contact';
  const title='Contactez-moi';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({mode:'all', resolver:yupResolver(schema)});

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const { success, error } = await response.json();
      if (success) {
      toast.success('Message envoyé!');
      } else {
      toast.error(error);
      }
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Header title={title} url={url} />
      <Toaster />
      
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col ml-[25vw] gap-6 min-w-96 w-1/2'>
          <div className='flex flex-col'>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" {...register('name')}  
            className={(errors.name ? 'outline-1 outline-w-lighter-orange' :'') + ' p-1'}/>
            {errors.name && <span className="text-w-orange">{errors.name?.message}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" {...register('email')} className={(errors.email ? 'outline-1 outline-w-lighter-orange text-w-orange' : 'text-w-text-blue') + 'p-1'}/>
            {errors.email && <span className="text-w-orange">{errors.email?.message}</span>}
          </div>
          <div className='flex flex-col'>
            <label htmlFor="message">Message :</label>
            <textarea id="message" {...register('message')} className={(errors.message ? "outline-1 outline-w-lighter-orange" :'') + 'p-1 h-[30vh] resize-none'}/>
            {errors.message && <span className="text-w-orange">{errors.message?.message}</span>}
          </div>
          {isSubmitting ? 
          <div className='flex items-center justify-center'>
            <Loader/>
          </div> :
          <button type='submit' disabled={!isValid}
          className={'mb-24 px-5 py-3 font-medium uppercase text-xs bg-w-orange text-white ease-in duration-300 rounded-sm w-2/5 mx-auto'+ (isValid ? ' hover:scale-90 hover:bg-w-blue mx-auto' : '')}
          >
            Envoyer   
          </button>
          }          
        </form>
        
    </Layout>
  );
};

