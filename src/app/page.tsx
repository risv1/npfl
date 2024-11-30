import Hero from "./home/Hero";
import Bento from "./home/Bento";
import Footer from "./home/Footer";

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-neutral-200/30 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 flex items-center flex-col h-full overflow-x-hidden">
        <Hero />
        <Bento />
        <Footer />
      </div>
    </main>
  );
}

export default Home;