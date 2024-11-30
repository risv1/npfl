import { Users, CircleDot, Trophy, TrendingUp, Shuffle } from 'lucide-react';
import BentoCard from './BentoCard';

const Bento: React.FC = () => {

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
        {
            title: "Points Table",
            description: "Real-time points tracking and league standings."
        },
        {
            title: "Detailed Dashboard",
            description: "Follow your scores, player performance, and league standings in real-time."
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl">
            {details.map((detail, index) => (
                <BentoCard
                    key={index}
                    icon={index === 0 ? Users : index === 1 ? Shuffle : index === 2 ? TrendingUp : index === 3 ? Trophy : CircleDot}
                    title={detail.title}
                    description={detail.description}
                />
            ))}
        </div>
    )
}

export default Bento;