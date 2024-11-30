import { LucideProps } from "lucide-react";

type BentoCardProps = {
    icon: React.FC<LucideProps>;
    title: string;
    description: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ icon: Icon , title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-950/15 p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-200 dark:hover:shadow-fuchsia-950 group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Icon size={48} className="text-fuchsia-500" />
            <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
        </div>
    );
};

export default BentoCard;