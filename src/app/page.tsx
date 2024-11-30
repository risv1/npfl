import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen flex flex-col gap-5 items-center">
      <h1 className="flex flex-row items-center text-4xl font-bold text-center text-black dark:text-white mt-32">
        <Image src="/images/logo.png" alt="NPFL" width={70} height={70} />
        NPFL
      </h1>
      <p className="text-center dark:text-neutral-400 text-neutral-800">Coming soon...</p>
    </main>
  );
}

export default Home;