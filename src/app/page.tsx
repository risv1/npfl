import Hero from "../components/home/Hero";
import Bento from "../components/home/Bento";
import Footer from "../components/home/Footer";

const Home: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-neutral-200/30 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 flex items-center flex-col h-full overflow-x-hidden">
        <Hero />
        <Bento />
        <Footer />
      </div>
    </main>
  );
}

export default Home;