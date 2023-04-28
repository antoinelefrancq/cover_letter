interface headerProps {
  url: string;
  title: string;
}

export default function Header ({title, url}:headerProps) {
  return (
    <>
      <div className={`w-screen h-[68vh] relative -top-32 -z-10  ${url} bg-[rgba(0,0,0,0.9)] bg-no-repeat bg-cover bg-[center_top_-5rem] before:block before:absolute before:bg-[rgba(0,0,0,0.3)] before:top-0 before:right-0 before:w-screen before:h-[68vh]`}></div>
      
      <h1 className="absolute top-[30vh] right-1/2 translate-x-1/2 text-white text-6xl font-bold text-center rounded-md p-4">{title}</h1>
    </>
  );
}