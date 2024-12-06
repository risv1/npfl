import React from 'react';
import Image from "next/image";
import { Trophy, Users, TrendingUp } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: {
    icon: JSX.ElementType
    title: string;
    description: string;
}) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
            <Icon className="w-6 h-6 text-fuchsia-500" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                {title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
                {description}
            </p>
        </div>
    </div>
);

const AuthCard: React.FC = () => {

    const details = [
        {
            title: "Meeting Rooms",
            description: "Connect during matches, discuss strategies and conduct auctions in real-time."
        },
        {
            title: "Randomizer Wheel",
            description: "Fair team selection process with our interactive randomizer wheel."
        },
        {
            title: "Helper Tools",
            description: "Deep dive into player statistics, team performance, and league trends."
        },
    ]

    return (
            <div className="w-full bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-700">
                <div className="mb-8">
                    <Image 
                        src="/images/logo.png" 
                        alt="NPFL"
                        width={60} 
                        height={60} 
                        className="mb-6"
                    />
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                        NPFL: 2024
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Fantasy League for the bois. Join now and get ready for the 2024 season.
                    </p>
                </div>

                <div className="space-y-6">
                    {details.map((detail, index) => (
                        <FeatureItem
                            key={index}
                            icon={index === 0 ? Users : index === 1 ? TrendingUp : Trophy}
                            title={detail.title}
                            description={detail.description}
                        />
                    ))}
                </div>
            </div>
    );
};

export default AuthCard;