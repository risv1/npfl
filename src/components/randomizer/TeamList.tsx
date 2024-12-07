const TeamList: React.FC<{
    teams: string[];
}> = ({ teams }) => (
    <div className="flex flex-wrap gap-2">
        {teams.map((team, index) => (
            <div
                key={index}
                className="
            bg-neutral-200 dark:bg-neutral-700 
            text-neutral-800 dark:text-neutral-100
            px-3 py-1 rounded-full 
            flex items-center space-x-2 
            text-sm
          "
            >
                {team}
            </div>
        ))}
    </div>
);

export default TeamList;