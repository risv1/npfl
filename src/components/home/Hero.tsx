"use client";

import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {

    const router = useRouter();
    const redirectTo = () => {
        router.push('/auth');
    }

    return (
        <div className="flex flex-col items-center mb-20 animate-fade-in">
            <h1 className="flex flex-row items-center text-5xl font-bold text-center text-black dark:text-white mt-32 mb-6 gap-4">
                <Image src="/images/logo.png" alt="NPFL" width={90} height={90} className="animate-pulse" />
                NPFL
            </h1>
            <p className="text-xl text-center dark:text-neutral-400 text-neutral-800 max-w-2xl mb-8">
                NP Fantasy League for IPL 2024.
            </p>
            <div className="flex flex-row items-center gap-5">
            <button 
                    onClick={redirectTo} 
                    className="flex flex-row items-center gap-3 px-6 py-3 text-lg group font-semibold text-fuchsia-500 rounded-lg transition-all duration-300">
                    Get Started
                    <ChevronsRight size={24} className="ml-2 transition-all duration-300 group-hover:ml-5" />
                </button>
            </div>
        </div>
    )
}

export default Hero;